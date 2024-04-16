const appJs = ``;

const appTestJs = `it("배열 만들기 #1", function () {
  const result = [1, 2, 3];
  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 비우기 #2", function () {
  const result = [];

  let guess = [1, 2, 3];
  guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 비우기 #3", function () {
  const result = [];

  const guess = [1, 2, 3];
  guess.length = VACO;

  expect(guess).to.eql(result);
});

it("배열 비우기 #4", function () {
  const result = [];

  const guess = [1, 2, 3];
  guess.splice(VACO, guess.length);

  expect(guess).to.eql(result);
});

it("배열 요소 추가하기 #1", function () {
  const result = VACO;

  const guess = [1, 2, 3];
  guess.push(4);

  expect(guess).to.eql(result);
});

it("배열 요소 추가하기 #2", function () {
  const result = [1, 2, 3];
  result.unshift(5);

  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 요소 제거하기 #3", function () {
  const result = [1, 2, 3];
  result.pop();

  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 요소 제거하기 #4", function () {
  const result = [1, 2, 3];
  result.shift();

  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열에서 원하는 요소 인덱스 찾기", function () {
  const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
  const result = arr.indexOf(2, 2);
  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열에서 원하는 요소 찾기", function () {
  const arr = [1, 2, 3, 4, 5, 2, 10, 13, 2];
  const result = arr.includes(2, 2);
  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 합치기", function () {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 4, 2];
  const result = arr1.concat(arr2);

  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 여부 확인하기", function () {
  const arr = [1, 2, 3];
  const result = Array.isArray(arr);
  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 요소 문자열로 만들기", function () {
  const arr = ["010", 1234, 5678];
  const result = arr.join("-");

  const guess = VACO;

  expect(guess).to.eql(result);
});

it("배열 뒤집기", function () {
  const arr = ["셋", "둘", "하나"];
  const result = arr.reverse();

  const guess = VACO;

  expect(guess).to.eql(result);
});
`;

const arraysQuizBasic = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default arraysQuizBasic;
