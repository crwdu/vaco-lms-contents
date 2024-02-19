const appJs = ``;

const appTestJs = `it("다른 자료형을 더하는 경우의 형변환", function () {
  const result = 7 + "3";
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("다른 자료형을 더하는 경우의 형변환", function () {
  const result = "7" + 3;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("다른 자료형을 빼는 경우의 형변환", function () {
  const result = "7" - 3;
  const guess = 바코;

  expect(result).toEqual(guess);
});
`;

const numbersQuizAdvanced = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default numbersQuizAdvanced;
