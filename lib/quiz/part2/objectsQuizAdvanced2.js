const appJs = ``;

const appTestJs = `it("배열의 요소인 객체 다루기", function () {
  const arr = [
    {
      name: "ken",
      job: "ceo",
    },
    {
      name: "leo",
      job: "pm",
    },
    {
      name: "dd",
      job: "designer",
    },
  ];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.length >= 3) {
      arr[i].job = "software engineer";
    }
  }

  const result = arr[2].job;
  const guess = 바코;

  expect(result).to.eql(guess);
});

it("객체 내부의 배열 다루기", function () {
  function calculateTotalProfit(account) {
    let totalProfit = 0;

    for (let i = 0; i < account.portfolio.length; i++) {
      totalProfit += account.portfolio[i].profit;
    }

    return totalProfit;
  }

  const account = {
    name: "ken",
    portfolio: [
      {
        name: "samsung",
        profit: -200,
      },
      {
        name: "apple",
        profit: 1000,
      },
      {
        name: "nike",
        profit: 100,
      },
    ],
  };

  const result = calculateTotalProfit(account);
  const guess = 바코;

  expect(result).to.eql(guess);
});
`;

const objectsQuizAdvanced2 = {
  "/app.test.js": {
    code: appTestJs,
  },
  "/app.js": {
    code: appJs,
    hidden: true,
  },
};

export default objectsQuizAdvanced2;