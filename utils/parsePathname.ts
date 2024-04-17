export const parsePathname = (pathname: string) => {
  let position = pathname.indexOf("/", 1);

  if (position === -1) {
    return { courseId: pathname, contentPath: "" };
  }

  return {
    courseId: pathname.substring(0, position),
    contentPath: pathname.substring(position),
  };
};
