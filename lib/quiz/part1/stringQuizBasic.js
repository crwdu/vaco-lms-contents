const appJs = ``;

const appTestJs = `it("문자열 만들기", function () {
  const today = "토요일";
  const result = "나는" + today + "에 일한다!";
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 만들기", function () {
  const today = "토요일";
  const result = \`나는 \${today}에 일한다!\`;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 길이", function () {
  const word = "word";
  const result = \`word는 \${word.length}글자입니다.\`;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 인덱스", function () {
  const str = "something";
  const result = \`\${str[0]}\${str[3]}\${str[1]}\`;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 인덱스", function () {
  const str = "hello world";
  const result = str[100];
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 인덱스", function () {
  const str = "I am a student";
  const result = str[-1];
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 인덱스", function () {
  const str = "I am a student";
  const result = str.indexOf("a");
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 소문자 변환", function () {
  const str = "HunGry?";
  const result = str.toLowerCase();
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 반복", function () {
  const str = "ha";
  const result = str.repeat(5);
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("문자열 자르기", function () {
  const str = "hello, kenny";
  const result = str.slice(7, 10);
  const guess = VACO;

  expect(guess).toEqual(result);
});
`;

const stringQuizBasic = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default stringQuizBasic;
