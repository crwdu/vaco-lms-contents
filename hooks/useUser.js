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

      const campVanilla = courses.find((course) => course.title === "Camp Vanilla");
      const userCampVanilla = user.courses.find((userCourse) => userCourse.course_id === campVanilla.id);

      if (!userCampVanilla.is_payment_paid) {
        alert("코스를 결제해야 이용할 수 있는 기능입니다.");
        window.location = `${process.env.NEXT_PUBLIC_URI}`;
        return;
      }

      if (result.ok) {
        setLogin(true);
        return;
      }
    }

    getAuth();
  }, []);

  return { isLoggedIn };
}
