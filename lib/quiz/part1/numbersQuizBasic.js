const appJs = "";

const appTestJs = `it("나머지 연산자", function () {
  const result = 10 % 2;
  const guess = 1;

  expect(result).to.equal(guess);
});

it("나머지 연산자, 대입 연산자, 후위 증감 연산자", function () {
  let a = 10 % 3;
  const result = a++;
  const guess = 바코;

  expect(result).to.equal(guess);
});

it("나머지 연산자, 대입 연산자, 전위 증감 연산자", function () {
  let a = 10 % 3;
  const result = ++a;
  const guess = 바코;

  expect(result).to.equal(guess);
});

it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
  let a = 10;
  a -= 5;

  const result = ++a;
  const guess = 바코;

  expect(result).to.equal(guess);
});

it("나머지 연산자, 산술 대입 연산자, 비교 연산자", function () {
  let a = 10;
  a = a / 5;

  const result = a > 2;
  const guess = 바코;

  expect(result).to.equal(guess);
});

it("나머지 연산자, 대입 연산자, 숫자 변환", function () {
  const a = "2";
  const result = Number(a);
  const guess = 바코;

  expect(result).to.equal(guess);
});
`;

const numbersQuizBasic = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default numbersQuizBasic;
