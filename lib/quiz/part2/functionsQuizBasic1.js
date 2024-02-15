const appJs = ``;

const appTestJs = `it("함수의 반환값 #7", function () {
  function isPositive(num) {
    if (num > 0) {
      return true;
    }

    return false;
  }

  const result = isPositive(1);
  const guess = 바코;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #8", function () {
  function getGrade(score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else {
      return "C";
    }
  }

  const result = getGrade(80);
  const guess = 바코;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #9", function () {
  function countEven(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        count++;
      }
    }

    return count;
  }

  const result = countEven([1, 2, 3, 4, 5, 6]);
  const guess = 바코;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #10", function () {
  function countNotKen(names) {
    let count = names.length;

    for (let i = 0; i < names.length; i++) {
      if (names[i] != "ken") {
        count--;
      }
    }

    return count;
  }

  const result = countNotKen(["ken", "kenny", "kony", "ken", "ken"]);
  const guess = 바코;

  expect(result).to.eql(guess);
});

it("배열의 요소로서 함수 실행문", function () {
  function combineValues(a, b) {
    return a + b;
  }

  const result = [combineValues("a", "bc"), combineValues("d", "ef")];
  const guess = 바코;

  expect(result[1]).to.eql(guess);
});

it("문자열 템플릿 리터럴 내에 함수 실행문", function () {
  function sayWord(word) {
    return word;
  }

  const result = \`Hello, \${sayWord("World")}\`;
  const guess = 바코;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #11", function () {
  function divideByTwo(num) {
    return num * 2;
  }

  function square(num) {
    return num * num;
  }

  function calculate(x) {
    if (x > 0) {
      return square(x);
    } else {
      return divideByTwo(x);
    }
  }

  const result = calculate(5);
  const guess = 바코;

  expect(result).to.eql(guess);
});
`;

const functionsQuizBasic = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default functionsQuizBasic;
