import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { throttle } from "lodash";
import useEventSender from "./useEventSender";

export default function useGlobalEvents() {
  const router = useRouter();

  const eventSender = useEventSender();

  // 컨텐츠 진입 - 웹앱 초기화
  useEffect(() => {
    eventSender.send('visit');
  }, []);

  // 컨텐트 진입 - 페이지 이동
  useEffect(() => {
    const handleRouteChange = (url) => {
      eventSender.send('visit');
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // 컨텐츠 이탈 이벤트
  useEffect(() => {
    // 웹앱 내 다른 컨텐츠로 이탈
    const handleRouteChange = (url) => {
      eventSender.send('leave');
    };

    router.events.on("beforeHistoryChange", handleRouteChange);

    // 웹앱 이탈
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        eventSender.send('leave');
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange, {
      capture: true,
    });

    return () => {
      router.events.off("beforeHistoryChange", handleRouteChange);

      document.removeEventListener("visibilitychange", handleVisibilityChange, {
        capture: true,
      });
    };
  }, []);

  // 스크롤 이벤트
  const [logged25, setLogged25] = useState(false);
  const [logged50, setLogged50] = useState(false);
  const [logged75, setLogged75] = useState(false);
  const [logged100, setLogged100] = useState(false);
  useEffect(() => {
    const logPageScrollEvent = (scrollPercentage) => {
      eventSender.send(`페이지스크롤 - ${scrollPercentage}%`);
    };

    const handleScroll = throttle(() => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 25 && scrollPercentage < 50 && !logged25) {
        logPageScrollEvent(25);
        setLogged25(true);
      } else if (scrollPercentage >= 50 && scrollPercentage < 75 && !logged50) {
        logPageScrollEvent(50);
        setLogged50(true);
      } else if (
        scrollPercentage >= 75 &&
        scrollPercentage < 100 &&
        !logged75
      ) {
        logPageScrollEvent(75);
        setLogged75(true);
      } else if (scrollPercentage >= 100 && !logged100) {
        logPageScrollEvent(100);
        setLogged100(true);
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);

    const reset = () => {
      setLogged25(false);
      setLogged50(false);
      setLogged75(false);
      setLogged100(false);
    };

    router.events.on("routeChangeComplete", reset);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      router.events.off("routeChangeComplete", reset);
    };
  }, [logged25, logged50, logged75, logged100]);

  // 코드 복사
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.matches(".nextra-button[title='Copy code']")) {
        eventSender.send('copy');
      }
    };

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);
}
