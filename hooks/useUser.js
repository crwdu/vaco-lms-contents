import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useUser() {
  const [isLoggedIn, setLogin] = useState(false);
  const router = useRouter();
  const course_id = router.basePath;

  useEffect(() => {
    async function getAuth() {
      const response = await fetch(`/api/auth`);

      if (!response.ok) {
        alert("로그인을 해야 이용할 수 있는 기능입니다.");
        window.location = `${process.env.NEXT_PUBLIC_URI}`;
        return;
      }

      const { result } = await response.json();
      const { courses: userCourses } = result.data;

      const courseEnrolled = !!userCourses.find(
        (course) => `/${course.titleSlug}` === course_id,
      );

      if (!courseEnrolled) {
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
