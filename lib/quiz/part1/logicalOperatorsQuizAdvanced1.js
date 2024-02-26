const appJs = ``;

const appTestJs = `it("||, && 논리 연산자", function () {
  const result = ("0" && 30) || false;
  const guess = VACO;

  expect(guess).toEqual(("0" && 30) || false);
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
