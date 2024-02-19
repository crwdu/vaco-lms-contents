const appJs = ``;

const appTestJs = `it("비교 연산자, 연산자 우선순위, 소수점 다루기 (부동 소수점)", function () {
  const a = 0.1;
  const b = 0.2;
  const result = a + b === 0.3;
  const guess = 바코;

  expect(result).toEqual(guess);
});
`;

const logicalOperatorsQuizAdvanced2 = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default logicalOperatorsQuizAdvanced2;
