const appJs = ``;

const appTestJs = `it("함수의 반환값 #1", function () {
  function foo() {}

  const result = foo();
  const guess = vaco;

  expect(result).to.eql(guess);
  });

it("함수의 반환값 #2", function () {
  function sayHello() {
    console.log("Hello, World!");
  }

  const result = sayHello();
  const guess = vaco;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #3", function () {
  function sayHello(name) {
    console.log(\`Hello, \${name}\`);
  }

  const result = sayHello();
  const guess = vaco;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #4", function () {
  function foo() {
    return NaN || 7;
  }

  const result = foo();
  const guess = vaco;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #5", function () {
  function add(x, y) {
    return x + y;
  }

  const result = add(1, 5);
  const guess = vaco;

  expect(result).to.eql(guess);
});

it("함수의 반환값 #6", function () {
  function echo(word, times) {
    return word.repeat(times);
  }

  const result = echo("수박", 3);
  const guess = vaco;

  expect(result).to.eql(guess);
});

it("함수 실행문과 연산자", function () {
  function sayHello() {
    console.log("Hello");
  }

  const result = sayHello() && "vaco";
  const guess = vaco;

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
