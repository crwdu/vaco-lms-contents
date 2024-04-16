const appJs = ``;

const appTestJs = `it("NOT 논리 연산자 #1", function () {
  const result = !false;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("NOT 논리 연산자 #2", function () {
  const result = !!true;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #1", function () {
  const result = Boolean(NaN);
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #2", function () {
  const result = Boolean(undefined + 20);
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #3", function () {
  const result = Boolean("hello");
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #4", function () {
  const result = Boolean("   ");
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #5", function () {
  const result = Boolean("");
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #6", function () {
  const result = Boolean(-0);
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #7", function () {
  const result = Boolean("null");
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("Truthy/Falsy 판별 #8", function () {
  const result = Boolean(null);
  const guess = VACO;

  expect(guess).toEqual(result);
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
