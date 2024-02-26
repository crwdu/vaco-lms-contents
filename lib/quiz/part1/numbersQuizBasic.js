const appJs = "";

const appTestJs = `it("나머지 연산자", function () {
  const result = 10 % 2;
  // 아랫줄 우측의 VACO를 (10 % 2)의 결과 값으로 변경하고 테스트를 실행해보세요.
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("나머지 연산자, 대입 연산자, 후위 증감 연산자", function () {
  let a = 10 % 3;
  const result = a++;
  // 아랫줄 우측의 VACO를 result 변수에 담기는 값으로 변경하고 테스트를 실행해보세요.
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("나머지 연산자, 대입 연산자, 전위 증감 연산자", function () {
  let a = 10 % 3;
  const result = ++a;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("나머지 연산자, 산술 대입 연산자, 전위 증감 연산자", function () {
  let a = 10;
  a -= 5;

  const result = ++a;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("나머지 연산자, 산술 대입 연산자, 비교 연산자", function () {
  let a = 10;
  a = a / 5;

  const result = a > 2;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("나머지 연산자, 대입 연산자, 숫자 변환", function () {
  const a = "2";
  const result = Number(a);
  const guess = VACO;

  expect(guess).toEqual(result);
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
