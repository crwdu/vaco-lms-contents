import { useRouter } from "next/router";

import { parsePathname } from "utils/parsePathname";

type ProcessMiningEvent = "visit" | "leave" | "scroll" | "copy" | "run_test";

let user = null;

const getUser = async () => {
  if (user) {
    return user;
  }

  const userResponse = await fetch(`/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!userResponse.ok) {
    if (process.env.VERCEL_ENV === "development") {
      return;
    }

    alert("로그인 여부를 확인해주세요");
    location.href = "/";
  }

  const { result: userResult } = await userResponse.json();

  user = userResult.data.user;

  return user;
};

function useEventSender() {
  const router = useRouter();

  /**
   * Send event to server
   * @param event
   * @param eventDetail
   * @param contentPath next/router의 routeChangeComplete 이벤트가 발생할 때 수동으로 pathname 전달하는 용도
   *                    (next/router에서 접근하는 pathname이 실제 routeChangeComplete 이벤트가 발생할때의 pathname가 아닌 경우가 존재)
   */
  const send = async (
    event: ProcessMiningEvent,
    eventDetail: any = null,
    contentPath?: string,
  ) => {
    const user = await getUser();

    const paths = parsePathname(router.pathname);
    const courseId = paths?.courseId;
    contentPath = paths?.contentPath;

    let finalContentPath = contentPath
      ? contentPath.replace(router.basePath, "")
      : router.pathname;

    const eventData = {
      user_id: user.id,
      timestamp: new Date().toISOString(),
      course_id: courseId,
      content_path: finalContentPath,
      event,
      event_detail: eventDetail,
    };

    fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
      keepalive: true,
    });
  };

  return { send };
}

export default useEventSender;
