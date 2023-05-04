import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Formik, Field, Form } from "formik";
import { cloneDeep } from "lodash";
import { format } from "date-fns";
import Lottie from "lottie-react";

import logo from "./public/images/logo/logo_type-bl.png";
import mediumIcon from "./public/icons/medium.png";
import instagramIcon from "./public/icons/instagram.png";
import facebookIcon from "./public/icons/facebook.png";
import youTubeIcon from "./public/icons/youTube.png";
import qnaIcon from "./public/icons/qna.png";
import cancelIcon from "./public/icons/cancel.svg";
import messageDisable from "./public/icons/messageDisable.svg";
import messageEnable from "./public/icons/messageEnable.svg";
import answerAnimation from "./public/animation/loding.json";

const mediumUrl = "https://medium.com/vanilla-coding";
const instagramUrl = "https://www.instagram.com/vanilla_coding";
const facebookUrl = "https://www.facebook.com/vcoding";
const youtubeUrl = "https://www.youtube.com/channel/UCqw3KRd7EBORZPqpxU4XLEA";
const refundPolicy = "https://www.notion.so/vanillacoding/Refund-Regulation-5fb4e6da39ae4665b5f376eb1172cf4b";

const config = {
  logo: (
    <>
      <Image
        alt="vaco logo"
        src={logo}
        width={150}
        height={58}
      />
    </>
  ),
  logoLink: process.env.NEXT_PUBLIC_URI,
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
      <title>바닐라코딩 Starter Kit</title>
    </>
  ),
  toc: {
    extraContent: () => {
      const [isStartingQna, setQnaStatus] = useState(false);
      const [isQuestionProgressing, setQuestionProgress] = useState(false);
      const [qnaList, setQnaList] = useState([]);

      const qnacontainerRef = useRef(null);
      const containerRef = useRef(null);
      const formContainerRef = useRef(null);
      const textareaRef = useRef(null);

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

      return (
        <>
          {isStartingQna ? (
            <div className="flex flex-col fixed border border-[#C9D1DD] w-[370px] h-[680px] rounded-[20px] right-[40px] bg-white bottom-[40px]">
              <div className="flex items-center h-[60px] border-b border-[#C9D1DD] pt-[18px] pb-[18px]">
                <div className="border border-[#C9D1DD] rounded-[40px] w-[36px] h-[36px] ml-[15px]">
                  <Image
                    src={qnaIcon}
                    alt="logo"
                  />
                </div>

                <div className="font-bold ml-[117px] text-base">KEN</div>

                <div className="cursor-pointer w-[14px] h-[14px] ml-[128px]" onClick={() => setQnaStatus((prev) => !prev)}>
                  <Image
                    src={cancelIcon}
                    alt="cancel"
                  />
                </div>
              </div>

              <div
                className="bg-slate-100 grow overflow-scroll"
                ref={qnacontainerRef}
              >
                <h1 className="font-bold text-xl mt-[22px] ml-[16px]">무엇이든 물어보세요.</h1>

                <div className="mt-[8px] ml-[16px] text-base font-normal text-[#405067] text-sm">
                  바닐라코딩의 코스를 학습하며 <br />
                  궁금한 모든 것을 KEN 에게 물어보세요.
                </div>

                <div className="border border-[#C9D1DD] rounded-lg w-[338px] bg-[#F8F9FB] mt-[16px] ml-[16px] text-sm">
                  <div className="mt-[24px] ml-[24px] text-[#405067] mr-[8px]">
                    <span>KEN을 사용함으로써 귀하는 아래 사용자 동의서에 동의 하는 것으로 간주됩니다.</span>
                  </div>

                  <div className="mt-[24px] ml-[40px] text-[#405067] text-sm mr-[8px]">
                    <ul className="list-disc">
                      <li>책임: KEN의 개발자는 이 시스템의 신뢰성을 보장하지 않으며 사용으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다.</li>
                      <li> 콘텐츠: KEN은 Upstage OCR과 OpenAI chatgpt API를 사용하므로 대화하는 내용과 이미지는 Upstage와 OpenAI로 보내지고 각각 API사용약관에 따라 이 콘텐츠는 서비스 개선을 위해 사용될 수 있습니다.
                        즉 사용자가 Upstage 및 OpenAI에 콘텐츠 사용 라이선스를 부여합니다. 귀하가 아래 사항에 동의를 하는 경우에만 KEN과 대화를 시작해 주세요.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-[24px] ml-[24px] text-[#405067] text-sm mr-[8px]">
                    <span>KEN 이용을 원치 않는 경우 대화창에서 나가실 수 있습니다.</span>
                  </div>

                  <div className="mt-[24px] ml-[40px] text-[#405067] text-sm mr-[8px]">
                    <ul className="list-disc">
                      <li>업스테이지는 민감한 정보를 수집하지 않습니다.</li>
                      <li>개인정보, 사생활이 포함되거나, 초상권, 명예, 지식재산권 등을 침해하거나, 음란물 등 불법정보는 입력이 금지됩니다.</li>
                      <li>입력된 콘텐츠는 업스테이지에게 전송되어 서비스 제공, 개선 및 고도화, 신규 서비스 개발을 위해 이용됩니다.</li>
                      <li>또한, OpenAI ChatGPT API 및 구글 API 사용을 위하여 OpenAI 및 구글로 전송됩니다.</li>
                      <li>업스테이지는 KEN의 정확성, 신뢰도 등 성능이나 품질에 대해서 어떠한 보증을 제공하지 않습니다. KEN을 이용하여 발생한 결과에 대해 업스테이지는 책임을 지지 않습니다.그외 사항은KEN이 제공되는 플랫폼의 약관 및 정책에 따릅니다.</li>
                    </ul>
                  </div>

                  <div className="mt-[24px] ml-[24px] text-[#405067] text-sm mr-[8px]">
                    <span>
                      [사용 전 꼭 읽어봐주세요!] <br />
                      KEN은 2021년 10월 이전 데이터로 학습된 Open AI의 모델로 실시간성이 없습니다. OpenAI가 제공하는 답변이 부정확하거나 부적절할수 있습니다. 이미지에서 글씨를 읽을수 있습니다. (1000자 이하)하루 100회의 무료 크레딧을 이용자 분들에게 제공합니다. KEN의 서비스나 정책은 예고없이 변동될 수 있습니다.
                    </span>
                  </div>

                  <div className="mt-[24px] ml-[24px] text-[#405067] text-sm mr-[8px] mb-[24px]">
                    <span>
                      [새로운 대화시작: 대화 리셋] <br />
                      대화를 리셋하고 모두 잊고 새로운 대화를 시작할수 있습니다. 새로운 주제를 시작할 때 꼭 눌러주세요.
                    </span>
                  </div>
                </div>

                {qnaList.map((qnaData) => {
                  const question = qnaData["question"];
                  const answer = qnaData["answer"];
                  const time = qnaData["time"];

                  return (
                    <div key={time} className="mt-[24px] mb-[24px]">
                      <div className="flex justify-center items-center">
                        <span className="text-[#405067] text-xs">
                          {format(time, "hh:mm")}
                        </span>
                      </div>

                      <div className="relative flex flex-row-reverse mt-[16px] ml-[16px] mr-[16px]">
                        <span className="inline-block bg-[#3366FF] rounded-t-2xl rounded-bl-2xl p-[16px] right-[16px] text-white">{question}</span>
                      </div>

                      {(isQuestionProgressing && !answer) ? (
                        <div className="relative flex mt-[16px] ml-[16px] mr-[16px] bg-[#F8F9FB] rounded-t-2xl rounded-br-2xl w-[80px] h-[56px]">
                          <Lottie
                            style={{
                              transform: "scale(1.5)",
                              opacity: "60%"
                            }}
                            animationData={answerAnimation}
                            loop={true}
                          />
                        </div>
                      ) : (
                        <div className="relative flex mt-[16px] ml-[16px] mr-[16px]">
                          <span className="inline-block bg-[#F8F9FB] rounded-t-2xl rounded-br-2xl p-[16px] right-[16px] text-black">{answer}</span>
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
                    onSubmit={async (values, { resetForm }) => {
                      const { qna } = values;
                      const trimedQna = qna.replace(/\s+/g, "");

                      if (trimedQna.length < 4) return;

                      const copiedQnaList = cloneDeep(qnaList);

                      copiedQnaList.push({
                        question: trimedQna,
                        answer: null,
                        time: new Date()
                      });

                      resetForm();
                      setQuestionProgress(true);
                      setQnaList(copiedQnaList);

                      try {
                        const userResponse = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/user`, {
                          method: "GET",
                          headers: {
                            "Content-Type": "application/json",
                          },
                        });
                        const { result: userResult } = await userResponse.json();
                        const { user } = userResult.data;

                        const userId = user.id;
                        const campVanilla = user.courses.find((course) => (course.is_admission_exist && course.schedule));
                        const splitedHref = window.location.href.split("/");
                        const lessonTitle = splitedHref[splitedHref.length - 1];

                        const qnaResponse = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/qna`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            userId,
                            courseId: campVanilla.course_id,
                            scheduleId: campVanilla.schedule,
                            qna: trimedQna,
                            lessonTitle,
                          }),
                        });
                        const { result: qnaResult } = await qnaResponse.json();

                        if (qnaResult.ok) {
                          const lastIndex = (copiedQnaList.length - 1);
                          const lastItem = cloneDeep(copiedQnaList[lastIndex]);

                          lastItem["answer"] = qnaResult.data;
                          copiedQnaList[lastIndex] = lastItem;

                          setQnaList(copiedQnaList);
                          setQuestionProgress(false);
                        }
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    initialValues={{ qna: "" }}
                    validate={values => {
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

                            const newLineCount = textareaRef.current.value.match(/\n/g)?.length;
                            const isOverMaxNewlineCount = newLineCount > 2;

                            if (!newLineCount) {
                              containerRef.current.style.minHeight = DEFAULT_CONTAINER_HEIGHT;
                              formContainerRef.current.style.minHeight = DEFAULT_FORMCONTAINER_HEIGHT;
                              textareaRef.current.style.minHeight = DEFAULT_TEXTAREA_HEIGHT;
                              return;
                            }

                            if (isOverMaxNewlineCount) {
                              containerRef.current.style.minHeight = MAX_CONTAINER_HEIGHT;
                              formContainerRef.current.style.minHeight = MAX_FROMCONTAINER_HEIGHT;
                              textareaRef.current.style.minHeight = MAX_TEXTAREA_HEIGHT;
                              return;
                            }

                            const containerNewHeight = 72 + (24 * newLineCount);
                            const formContainerNewHeight = 48 + (24 * newLineCount);
                            const newHeight = 24 * (newLineCount + 1);

                            containerRef.current.style.minHeight = `${containerNewHeight}px`;
                            formContainerRef.current.style.minHeight = `${formContainerNewHeight}px`;
                            textareaRef.current.style.minHeight = `${newHeight}px`;
                          }}
                          innerRef={textareaRef}
                          as="textarea"
                          name="qna"
                          className="focus:outline-none resize-none mt-[12px] ml-[12px] w-[270px] h-[24px] text-base"
                          placeholder="무엇이 궁금한가요?"
                        />

                        {!isQuestionProgressing && (
                          <button
                            className="mt-[6px]"
                            type="submit"
                          >
                            {values.qna.length ? (
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
              className="fixed cursor-pointer w-[60px] h-[60px] border border-[#C9D1DD] rounded-[40px] right-[40px] bottom-[40px]"
              onClick={() => setQnaStatus((prev) => !prev)}
            >
              <Image
                src={qnaIcon}
                alt="logo"
              />
            </div>
          )}
        </>
      );
    }
  },
  footer: {
    text: () => {
      return (
        <div className="flex w-full justify-between">
          <div>
            <strong className="font-bold text-sm">㈜크라우드에듀케이션</strong>
            <p className="leading-[25px] mt-6 text-sm">
              대표 허근행 | 개인정보책임자 허근행
              <br />
              사업자 등록번호 843-81-02398
              <br />
              주소 서울특별시 강남구 대치 2동 테헤란로 522, 7층
              <br />
              문의 info@vanillacoding.co
            </p>
            <div className="mt-[50px]">
              <a
                href="/starterkit/files/policy.pdf"
                target="_blank"
                className="text-sm text-gray-5 font-bold block sm:inline-block"
                title="이용약관 및 개인정보 보호정책"
              >
                이용약관 및 개인정보 보호정책
              </a>
              <a
                href={refundPolicy}
                target="_blank"
                className="text-sm text-gray-5 font-bold ml-0 sm:ml-10 block sm:inline-block"
                title="코스 환불 규정"
              >
                코스 환불 규정
              </a>
            </div>
          </div>

          <div className="flex items-end">
            <a
              href={mediumUrl}
              target="_blank"
              title="medium"
            >
              <div className="flex mr-[44px]">
                <Image
                  src={mediumIcon}
                  alt="medium icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              title="instagram"
            >
              <div className="flex mr-[44px]">
                <Image
                  src={instagramIcon}
                  alt="instagram icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              title="facebook"
            >
              <div className="flex mr-[44px]">
                <Image
                  src={facebookIcon}
                  alt="facebook icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
            <a
              href={youtubeUrl}
              target="_blank"
              title="youtube"
            >
              <div className="flex mr-[44px]">
                <Image
                  src={youTubeIcon}
                  alt="youtube icon"
                  width={32}
                  height={32}
                />
              </div>
            </a>
          </div>
        </div>
      );
    }
  }
};

export default config;
