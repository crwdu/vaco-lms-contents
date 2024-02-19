const appJs = ``;

const appTestJs = `it("||, && 논리 연산자", function () {
  const result = ("0" && 30) || false;
  const guess = 바코;

  expect(("0" && 30) || false).toEqual(guess);
});
`;

const logicalOperatorsQuizAdvanced1 = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default logicalOperatorsQuizAdvanced1;
