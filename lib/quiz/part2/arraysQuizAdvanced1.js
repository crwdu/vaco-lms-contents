const appJs = ``;

const appTestJs = `it("객체의 동적 키값 다루기", function () {
  const puzzle = {};

  function sayHello(num) {
    return num + 2;
  }

  puzzle[sayHello(1)] = 1;
  puzzle[sayHello(2)] = 2;

  const result = puzzle;
  const guess = VACO;

  expect(guess).to.eql(result);
});

it("중첩된 객체 다루기", function () {
  const student = {
    name: "jj",
    age: 20,
    grades: {
      math: 70,
      science: 85,
      history: 92,
    },
  };

  function getPassedSubjects(student) {
    const passedSubjects = [];

    for (const subject in student.grades) {
      if (student.grades[subject] >= 80) {
        passedSubjects.push(subject);
      }
    }

    return passedSubjects;
  }

  const result = getPassedSubjects(student);
  const guess = VACO;

  expect(guess).to.eql(result);
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
