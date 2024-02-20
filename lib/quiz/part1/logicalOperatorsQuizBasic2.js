const appJs = ``;

const appTestJs = `it("NOT 논리 연산자", function () {
  const result = !false;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("NOT 논리 연산자", function () {
  const result = !!true;
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean(NaN);
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean(undefined + 20);
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean("hello");
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean("   ");
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean("");
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean(-0);
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean("null");
  const guess = 바코;

  expect(result).toEqual(guess);
});

it("Truthy/Falsy 판별", function () {
  const result = Boolean(null);
  const guess = 바코;

  expect(result).toEqual(guess);
});
`;

const logicalOperatorsQuizBasic2 = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default logicalOperatorsQuizBasic2;