const appJs = ``;

const appTestJs = `it("배열 요소 제거하기", function () {
  /* (참고) Math.floor (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
  const a = Math.floor(2.1); // 2
  const b = Math.floor(2.6); // 2
   */

  const result = [1, 2, 3];
  const midIndex = Math.floor(result.length / 2);

  result.splice(midIndex, 1);

  const guess = VACO;

  expect(guess).toEqual(result);
});

it("배열 순회하기 #1", function () {
  const arr = [4, 9, 12];
  let result;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      result = arr[i];
    }
  }

  const guess = VACO;

  expect(guess).toEqual(result);
});

it("배열 순회하기 #2", function () {
  const arr = ["h", "e", "l", "l", "o"];

  function reverseArr(arr) {
    const newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
    }

    return newArr;
  }

  const result = reverseArr(arr);
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("배열 순회하기 #3", function () {
  const arr = [1, 4, 5, 8, 9, 12, 15];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result.push(arr[i]);
    }
  }

  const guess = VACO;

  expect(guess).toEqual(result);
});

it("배열 순회하기 #4", function () {
  const arr = [1, 4, 5, 8, 9, 12, 15];
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      result.push(arr[i]);
    }
  }

  const guess = VACO;

  expect(guess).toEqual(result);
});
`;

const arraysQuizAdvanced1 = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default arraysQuizAdvanced1;
