const appJs = ``;

const appTestJs = `it("NOT 논리 연산자", function () {
  const a = 45;
  const result = !a;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("NOT 논리 연산자", function () {
  const a = 45;
  const result = !!a;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("NOT 논리 연산자", function () {
  const a = 0;
  const result = !!a;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("NOT 논리 연산자", function () {
  const a = -0;
  const result = !!a;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("&& 논리 연산자", function () {
  const result = 30 && 0;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("&& 논리 연산자", function () {
  const result = 0 && 10;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("|| 논리 연산자", function () {
  const result = 7 || 3;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("|| 논리 연산자", function () {
  const result = NaN || 3;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("||, && 논리 연산자", function () {
  const result = 7 || (3 && 10);
  const guess = VACO;

  expect(guess).toEqual(result);
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
