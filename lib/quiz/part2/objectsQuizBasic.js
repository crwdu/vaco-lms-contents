const appJs = ``;

const appTestJs = `it("객체 데이터 다루기 #1", function () {
  const person = {
    name: "leo",
    job: "operations manager",
  };

  person.years = 3;
  person.job = "pm";

  const result = person.job;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("객체 데이터 다루기 #2", function () {
  const person = {
    name: "leo",
  };

  person.name = "dd";
  person.job = "designer";

  const result = person.name;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("객체 데이터 다루기 #3", function () {
  const employee = {
    name: "dm",
    job: "software engineer",
    years: 1,
  };

  const key = "id";
  employee[key] = 4;

  const result = employee.id;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("객체 데이터 다루기 #4", function () {
  const employee = {
    name: "dm",
    job: "software engineer",
    years: 1,
  };

  delete employee.years;

  const result = employee.years;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("중첩된 객체 다루기 #1", function () {
  const result = {
    name: "Vanilla Coding",
    url: "https://www.vanillacoding.co/",
    contact: {
      email: "info@vanillacoding.co",
      phone: "02-6713-7279",
    },
  };

  const guess = {
    name: "Vanilla Coding",
    url: "https://www.vanillacoding.co/",
  };

  guess.contact = VACO;

  expect(guess).toEqual(result);
});

it("중첩된 객체 다루기 #2", function () {
  const company = {
    name: "Vanilla Coding",
    url: "https://www.vanillacoding.co/",
    contact: {
      email: "info@vanillacoding.co",
      phone: "02-6713-7279",
    },
  };

  const result = company.contact.email;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("중첩된 객체 다루기 #3", function () {
  const reservation = {
    name: "ken",
    checkInDate: "2024-01-15",
    checkOutDate: "2024-01-16",
    location: {
      country: "South Korea",
      city: "Seoul",
    },
  };

  const countries = ["South Korea", "Japan", "United States"];
  const result = reservation.location[countries[0]];

  const guess = VACO;
  expect(guess).toEqual(result);
});

it("중첩된 객체 다루기 #4", function () {
  const reservation = {
    name: "ken",
    checkInDate: "2024-01-15",
    checkOutDate: "2024-01-16",
    location: {
      country: "South Korea",
      city: "Seoul",
    },
  };

  const result = reservation.location;
  const key = "country";
  delete reservation.location[key];

  const guess = VACO;
  expect(guess).toEqual(result);
});

it("객체와 함수 실행문", function () {
  function sayHello() {
    console.log("디자인을 합니다.");
  }

  const person = {
    name: "dd",
    job: "designer",
    greeting: sayHello(),
  };

  const result = person.greeting;
  const guess = VACO;

  expect(guess).toEqual(result);
});

it("객체와 배열", function () {
  const person = {
    name: "ken",
    job: "ceo",
  };

  person.interests = ["fishing", "coding"];
  person.interests.push("marketing");

  const result = person.interests[2];
  const guess = VACO;

  expect(guess).toEqual(result);
});
`;

const objectsQuizBasic = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default objectsQuizBasic;
