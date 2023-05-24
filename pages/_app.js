import "../styles/globals.css";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import { cloneDeep } from "lodash";
import { format } from "date-fns";
import Lottie from "lottie-react";

import qnaIcon from "../public/icons/bot.png";
import cancelIcon from "../public/icons/cancel.svg";
import messageDisable from "../public/icons/messageDisable.svg";
import messageEnable from "../public/icons/messageEnable.svg";
import answerAnimation from "../public/animation/loding.json";

import useUser from "../hooks/useUser";

export default function Nextra({ Component, pageProps }) {
  const { isLoggedIn } = useUser();

  const [isStartingQna, setQnaStatus] = useState(false);
  const [isQuestionProgressing, setQuestionProgress] = useState(false);
  const [qnaList, setQnaList] = useState([]);
  const [hasVisitedContentPage, setHasVisitedContentPage] = useState(true);

  const qnacontainerRef = useRef(null);
  const containerRef = useRef(null);
  const formContainerRef = useRef(null);
  const textareaRef = useRef(null);

  let monthDay = null;

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedContentPage");

    if (!hasVisited) {
      setHasVisitedContentPage(false);
    }
  }, [hasVisitedContentPage]);

  useEffect(() => {
    if (isStartingQna && qnaList.length && qnacontainerRef.current) {
      qnacontainerRef.current.scrollTop = qnacontainerRef.current.scrollHeight;
    }
  }, [isStartingQna]);

  useEffect(() => {
    if (qnacontainerRef.current) {
      qnacontainerRef.current.scrollTop = qnacontainerRef.current.scrollHeight;
    }
  }, [isQuestionProgressing, qnaList.length]);

  async function handleSubmit(values, { resetForm }) {
    const { qna } = values;
    const trimedQna = qna.replace(/\s+/g, "");

    if (trimedQna.length < 4) return;

    const copiedQnaList = cloneDeep(qnaList);

    copiedQnaList.push({
      question: qna,
      answer: null,
      time: new Date(),
    });

    resetForm();
    setQuestionProgress(true);
    setQnaList(copiedQnaList);

    try {
      const userResponse = await fetch(
        `${process.env.NEXT_PUBLIC_URI}/api/user`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { result: userResult } = await userResponse.json();
      const { user } = userResult.data;

      const userId = user.id;
      const campVanilla = user.courses.find(
        (course) => course.is_admission_exist && course.schedule
      );
      const splitedHref = window.location.href.split("/");
      const lessonTitle = splitedHref[splitedHref.length - 1];

      const qnaResponse = await fetch(
        `${process.env.NEXT_PUBLIC_URI}/api/qna`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            courseId: campVanilla.course_id,
            qna: trimedQna,
            lessonTitle,
          }),
        }
      );
      const { result: qnaResult } = await qnaResponse.json();

      const lastIndex = copiedQnaList.length - 1;
      const lastItem = cloneDeep(copiedQnaList[lastIndex]);

      lastItem["answer"] = qnaResult?.ok
        ? qnaResult.data
        : "질문하신 내용은 대답하기 어렵습니다. 더 공부해서 돌아올께요.";

      copiedQnaList[lastIndex] = lastItem;

      setQnaList(copiedQnaList);
      setQuestionProgress(false);
    } catch (error) {
      console.log(error);

      const lastIndex = copiedQnaList.length - 1;
      const lastItem = cloneDeep(copiedQnaList[lastIndex]);

      lastItem["answer"] =
        "질문하신 내용은 대답하기 어렵습니다. 더 공부해서 돌아올께요.";
      copiedQnaList[lastIndex] = lastItem;

      setQnaList(copiedQnaList);
      setQuestionProgress(false);
    }
  }

  if (!isLoggedIn && (process.env.NODE_ENV === "production")) {
    return <></>;
  }

  return (
    <>
      {!isStartingQna && !hasVisitedContentPage && (
        <>
          <div className="fixed flex justify-center items-center w-[179px] h-[52px] bg-[#0040FF] right-[116px] bottom-[44px] rounded-lg">
            <span className="text-xs text-white">
              학습 도중 어려움이 생기면, <br />
              무엇이든 KEN에게 물어보세요.
            </span>
          </div>
          <div className="fixed w-[12px] h-[12px] bg-[#0040FF] right-[112px] bottom-[63px] rotate-45" />
        </>
      )}

      {isStartingQna ? (
        <div className="flex flex-col fixed border border-[#C9D1DD] w-[370px] h-[680px] rounded-[20px] right-[40px] bg-white bottom-[40px] z-10 shadow-xl">
          <div className="flex items-center h-[60px] border-b border-[#C9D1DD] pt-[18px] pb-[18px]">
            <div className="border border-[#C9D1DD] rounded-[40px] w-[36px] h-[36px] ml-[15px]">
              <Image src={qnaIcon} alt="logo" />
            </div>

            <div className="font-bold ml-[117px] text-base">KEN</div>

            <div
              className="cursor-pointer w-[14px] h-[14px] ml-[128px]"
              onClick={() => {
                localStorage.setItem("hasVisitedContentPage", true);
                setHasVisitedContentPage(true);
                setQnaStatus((prev) => !prev);
              }}
            >
              <Image src={cancelIcon} alt="cancel" />
            </div>
          </div>

          <div
            className="bg-slate-100 grow overflow-scroll pb-[48px]"
            ref={qnacontainerRef}
          >
            {!qnaList.length && (
              <>
                <h1 className="font-bold text-xl mt-[22px] ml-[16px]">
                  무엇이든 물어보세요.
                </h1>

                <div className="mt-[8px] ml-[16px] text-base font-normal text-[#405067]">
                  바닐라코딩의 코스를 학습하며 <br />
                  궁금한 모든 것을 KEN 에게 물어보세요.
                </div>

                <div className="rounded-lg w-[338px] bg-[#F8F9FB] mt-[16px] ml-[16px] text-sm">
                  <div className="pt-[24px] text-[#405067] ml-[16px] mr-[16px]">
                    <span>
                      Ken Bot을 사용함으로써 귀하는 아래 사용자 동의서에 동의
                      하는 것으로 간주됩니다. 하단 사용 안내를 반드시
                      읽어주세요.
                    </span>
                  </div>

                  <div className="pt-[24px] text-[#405067] ml-[16px] mr-[16px]">
                    <span>
                      Ken Bot은 OpenAI에서 제공하는 ChatGPT 서비스를 활용해
                      바닐라코딩 수강생의 질문에 답변을 드리는 서비스입니다.
                    </span>
                  </div>

                  <div className="pt-[24px] text-[#405067] ml-[16px] mr-[16px]">
                    <span>
                      ChatGPT란 OpenAI에서 개발한 대화형 인공지능 서비스이며
                      2021년 12월 이후의 정보는 제한되는 등 정확하지 않은 정보가
                      제공될 수 있습니다.
                    </span>
                  </div>

                  <div className="pt-[24px] text-[#405067] ml-[16px] mr-[16px]">
                    <span>
                      본 서비스에서 제공되는 답변의 주체는 바닐라코딩이 아닌
                      OpenAI입니다. 따라서, 대화 내용에 개인정보 등 민감한
                      정보가 포함되지 않도록 해주시기 바랍니다.
                    </span>
                  </div>

                  <div className="mt-[24px] text-[#405067] text-sm ml-[16px] mr-[16px]">
                    <span>
                      귀하가 아래 사항에 동의를 하는 경우에만 Ken Bot과 대화를
                      시작해 주세요.
                    </span>
                  </div>

                  <div className="mt-[24px] text-[#405067] text-sm ml-[16px] mr-[16px]">
                    <ul className="list-disc ml-[16px]">
                      <li>
                        책임: Ken Bot의 개발자는 이 시스템의 신뢰성을 보장하지
                        않으며 사용으로 인해 발생하는 어떠한 손해에 대해서도
                        책임을 지지 않습니다.
                      </li>
                      <li>
                        콘텐츠: Ken Bot은 OpenAI ChatGPT API를 사용하므로
                        대화하는 내용은 OpenAI와 바닐라코딩으로 보내지고 각각
                        API 사용약관에 따라 이 콘텐츠는 서비스 개선을 위해
                        사용될 수 있습니다. 즉 사용자가 OpenAI와 바닐라코딩에
                        콘텐츠 사용 라이선스를 부여합니다.
                      </li>
                      <li>
                        그외 사항은 Ken Bot이 제공되는 플랫폼의 약관 및 정책에
                        따릅니다.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-[24px] text-[#405067] text-sm pb-[24px] ml-[16px] mr-[16px]">
                    <span>
                      Ken Bot 이용을 원치 않는 경우 채팅창에서 나가실 수
                      있습니다.
                    </span>
                  </div>
                </div>
              </>
            )}

            {qnaList.map((qnaData) => {
              const question = qnaData["question"];
              const answer = qnaData["answer"];
              const time = qnaData["time"];
              const currentMonthDay = format(time, "M월 d일");

              let currentTime = format(time, "M월 d일 a h:mm");

              if (monthDay !== currentMonthDay) {
                monthDay = currentMonthDay;
              } else {
                currentTime = "";
              }

              return (
                <div key={time} className="mt-[24px] mb-[24px]">
                  <div className="flex justify-center items-center">
                    <span className="text-[#405067] text-xs">
                      {currentTime}
                    </span>
                  </div>

                  <div className="relative flex flex-row-reverse mt-[16px] ml-[16px] mr-[16px]">
                    <span className="inline-block bg-[#3366FF] rounded-t-2xl rounded-bl-2xl p-[16px] right-[16px] text-white text-base">
                      {question}
                    </span>
                  </div>

                  {isQuestionProgressing && !answer ? (
                    <div className="relative flex mt-[16px] ml-[16px] mr-[16px] bg-[#F8F9FB] rounded-t-2xl rounded-br-2xl w-[80px] h-[56px]">
                      <Lottie
                        style={{
                          transform: "scale(1.5)",
                          opacity: "60%",
                        }}
                        animationData={answerAnimation}
                        loop={true}
                      />
                    </div>
                  ) : (
                    <div className="relative flex mt-[16px] ml-[16px] mr-[16px]">
                      <span className="inline-block bg-[#F8F9FB] rounded-t-2xl rounded-br-2xl p-[16px] right-[16px] text-black text-base">
                        {answer}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            className="flex justify-center items-center w-[338px] ml-[16px] min-h-[72px]"
            ref={containerRef}
          >
            <div
              className="border border-[#D9DEE7] rounded-lg w-[338px] h-[48px]"
              ref={formContainerRef}
            >
              <Formik
                onSubmit={handleSubmit}
                initialValues={{ qna: "" }}
                validate={(values) => {
                  const errors = {};

                  if (!values.qna.length) errors.qna = "Invalid qna length";

                  return errors;
                }}
              >
                {({ values, handleChange }) => (
                  <Form className="flex">
                    <Field
                      onChange={(e) => {
                        if (e.target.value.length > 100) return;

                        handleChange(e);

                        const DEFAULT_CONTAINER_HEIGHT = "72px";
                        const DEFAULT_FORMCONTAINER_HEIGHT = "48px";
                        const DEFAULT_TEXTAREA_HEIGHT = "24px";
                        const MAX_CONTAINER_HEIGHT = "120px";
                        const MAX_FROMCONTAINER_HEIGHT = "96px";
                        const MAX_TEXTAREA_HEIGHT = "72px";

                        const newLineCount =
                          textareaRef.current.value.match(/\n/g)?.length;
                        const isOverMaxNewlineCount = newLineCount > 2;

                        if (!newLineCount) {
                          containerRef.current.style.minHeight =
                            DEFAULT_CONTAINER_HEIGHT;
                          formContainerRef.current.style.minHeight =
                            DEFAULT_FORMCONTAINER_HEIGHT;
                          textareaRef.current.style.minHeight =
                            DEFAULT_TEXTAREA_HEIGHT;
                          return;
                        }

                        if (isOverMaxNewlineCount) {
                          containerRef.current.style.minHeight =
                            MAX_CONTAINER_HEIGHT;
                          formContainerRef.current.style.minHeight =
                            MAX_FROMCONTAINER_HEIGHT;
                          textareaRef.current.style.minHeight =
                            MAX_TEXTAREA_HEIGHT;
                          return;
                        }

                        const containerNewHeight = 72 + 24 * newLineCount;
                        const formContainerNewHeight = 48 + 24 * newLineCount;
                        const newHeight = 24 * (newLineCount + 1);

                        containerRef.current.style.minHeight = `${containerNewHeight}px`;
                        formContainerRef.current.style.minHeight = `${formContainerNewHeight}px`;
                        textareaRef.current.style.minHeight = `${newHeight}px`;
                      }}
                      innerRef={textareaRef}
                      as="textarea"
                      name="qna"
                      className="focus:outline-none resize-none mt-[12px] ml-[12px] w-[270px] h-[24px] text-base"
                      placeholder="4~200자 내로 작성해주세요."
                    />

                    {!isQuestionProgressing && (
                      <button className="mt-[6px]" type="submit">
                        {values.qna.length > 3 ? (
                          <div className="rounded-full flex justify-center items-center w-[36px] h-[36px] bg-[#0040FF] ml-[8px]">
                            <Image
                              className="inline"
                              src={messageEnable}
                              alt="message"
                            />
                          </div>
                        ) : (
                          <div className="rounded-full flex justify-center items-center w-[36px] h-[36px] ml-[8px]">
                            <Image
                              className="inline"
                              src={messageDisable}
                              alt="message"
                            />
                          </div>
                        )}
                      </button>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="z-10 fixed cursor-pointer w-[60px] h-[60px] border border-[#C9D1DD] rounded-[40px] right-[40px] bottom-[40px] bg-white shadow-xl"
          onClick={() => setQnaStatus((prev) => !prev)}
        >
          <Image src={qnaIcon} alt="logo" />
        </div>
      )}
      <Component {...pageProps} />
    </>
  );
}
