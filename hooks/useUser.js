import { useState, useEffect } from "react";

export default function useUser() {
  const [isLoggedIn, setLogin] = useState(false);

  useEffect(() => {
    async function getAuth() {
      const response = await fetch(`/api/auth`);

      if (!response.ok) {
        alert("로그인을 해야 이용할 수 있는 기능입니다.");
        window.location = `${process.env.NEXT_PUBLIC_URI}`;
        return;
      }

      const { result } = await response.json();
      const { user, courses } = result.data;

      // NOTE: 임시 처리, /api/auth 자체를 수정하여 다른 코스에도 대응할 수 있도록 변경 필요
      const js101 = courses.find((course) => course.title === "js101");
      const userJs101 = user.courses.find(
        (userCourse) => userCourse.course_id === js101.id,
      );

      if (!userJs101) {
        alert("코스를 결제해야 이용할 수 있는 기능입니다.");
        window.location = `${process.env.NEXT_PUBLIC_URI}`;
        return;
      }

      if (result.ok) {
        setLogin(true);
        return;
      }
    }

    if (process.env.NODE_ENV === "production") {
      getAuth();
    }
  }, []);

  return { isLoggedIn };
}
