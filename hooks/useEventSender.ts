import { useRouter } from "next/router";

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
    alert("로그인 여부를 확인해주세요");
    location.href = "/";
    return;
  }

  const { result: userResult } = await userResponse.json();

  user = userResult.data.user;

  return user;
};

function useEventSender() {
  const router = useRouter();

  const send = async (event: ProcessMiningEvent, event_detail: any = null) => {
    const user = await getUser();

    const eventData = {
      user_id: user.id,
      timestamp: new Date().toISOString(),
      course_id: router.basePath,
      content_path: router.pathname,
      event,
      event_detail,
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
