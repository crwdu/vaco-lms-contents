const appJs = "";

const appTestJs = `// 나머지 연산자
it("numbers-basic-1", function () {
  const result = 10 % 2;
  // TODO
  const guess = 1;

  expect(result).toEqual(guess);
});


// 나머지 연산자, 대입 연산자, 후위 증감 연산자
it("numbers-basic-2", function () {
  let a = 10 % 3;
  const result = a++;
  // TODO
  const guess = vaco;

  expect(result).toEqual(guess);
});


// 나머지 연산자, 대입 연산자, 전위 증감 연산자
it("numbers-basic-3", function () {
  let a = 10 % 3;
  const result = ++a;
  // TODO
  const guess = vaco;

  expect(result).toEqual(guess);
});


// 나머지 연산자, 산술 대입 연산자, 전위 증감 연산자
it("numbers-basic-4", function () {
  let a = 10;
  a -= 5;

  const result = ++a;
  // TODO
  const guess = vaco;

  expect(result).toEqual(guess);
});


// 나머지 연산자, 산술 대입 연산자, 비교 연산자
it("numbers-basic-5", function () {
  let a = 10;
  a = a / 5;

  const result = a > 2;
  // TODO
  const guess = vaco;

  expect(result).toEqual(guess);
});


// 나머지 연산자, 대입 연산자, 숫자 변환
it("numbers-basic-6", function () {
  const a = "2";
  const result = Number(a);
  // TODO
  const guess = vaco;

  expect(result).toEqual(guess);
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
