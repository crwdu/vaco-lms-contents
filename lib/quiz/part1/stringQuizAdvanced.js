const appJs = ``;

const appTestJs = `it("문자열 반복, 자르기, 붙이기", function () {
  const a = "ha".repeat(3);
  const b = a.split("a");
  const result = b.join(":");
  const guess = VACO;

  expect(guess).toEqual(result);
});
`;

const stringQuizAdvanced = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default stringQuizAdvanced;
