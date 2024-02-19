const appJs = ``;

const appTestJs = `it("NOT 논리 연산자", function () {
  const a = 45;
  const result = !a;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("NOT 논리 연산자", function () {
  const a = 45;
  const result = !!a;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("NOT 논리 연산자", function () {
  const a = 0;
  const result = !!a;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("NOT 논리 연산자", function () {
  const a = -0;
  const result = !!a;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("&& 논리 연산자", function () {
  const result = 30 && 0;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("&& 논리 연산자", function () {
  const result = 0 && 10;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("|| 논리 연산자", function () {
  const result = 7 || 3;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("|| 논리 연산자", function () {
  const result = NaN || 3;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("||, && 논리 연산자", function () {
  const result = 7 || (3 && 10);
  const guess = 바코;

  expect(result).toEqual(guess);
});
`;

const logicalOperatorsQuizBasic1 = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default logicalOperatorsQuizBasic1;
