//calculate monthly income and expense
const db = require("../models");
const moment = require("moment");
const Expense = db.expense;
const Income = db.income;

const monthranges = {
  jan: [
    moment().month(0).startOf("month").unix(),
    moment().month(0).endOf("month").unix(),
  ],
  feb: [
    moment().month(1).startOf("month").unix(),
    moment().month(1).endOf("month").unix(),
  ],
  mar: [
    moment().month(2).startOf("month").unix(),
  moment().month(2).endOf("month").unix(),
  ],
  apr: [
    moment().month(3).startOf("month").unix(),
    moment().month(3).endOf("month").unix(),
  ],
  may: [
    moment().month(4).startOf("month").unix(),
    moment().month(4).endOf("month").unix(),
  ],
  june: [
    moment().month(5).startOf("month").unix(),
    moment().month(5).endOf("month").unix(),
  ],
  july: [
    moment().month(6).startOf("month").unix(),
    moment().month(6).endOf("month").unix(),
  ],
  aug: [
    moment().month(7).startOf("month").unix(),
    moment().month(7).endOf("month").unix(),
  ],
  sept: [
    moment().month(8).startOf("month").unix(),
    moment().month(8).endOf("month").unix(),
  ],
  oct: [
    moment().month(9).startOf("month").unix(),
    moment().month(9).endOf("month").unix(),
  ],
  nov: [
    moment().month(10).startOf("month").unix(),
    moment().month(10).endOf("month").unix(),
  ],
  dec: [
    moment().month(11).startOf("month").unix(),
    moment().month(11).endOf("month").unix(),
  ],
};

// calculate expense of every month
exports.calculateExpense = (req, res) => {
  Expense.findAll()
    .then((data) => {
      const monthlyExpense = {};
      for (let i = 0; i < data.length; i++) {
        const expense = data[i];
        const expenseDate = moment(expense.dataValues.date);
        for (const [key, value] of Object.entries(monthranges)) {
          if (expenseDate.isBetween(value[0], value[1])) {
            if (monthlyExpense[key] === undefined) {
              monthlyExpense[key] = expense.amount;
            } else {
              monthlyExpense[key] += expense.amount;
            }
          } else {
            if (monthlyExpense[key] === undefined) {
              monthlyExpense[key] = 0;
            }
          }
        }
      }
      res.send(monthlyExpense);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

// calculate income of every month
exports.calculateIncome = (req, res) => {
  Income.findAll()
    .then((data) => {
      const monthlyIncome = {};
      for (let i = 0; i < data.length; i++) {
        const income = data[i];
        const incomeDate = moment(income.dataValues.date);
        for (const [key, value] of Object.entries(monthranges)) {
          if (incomeDate.isBetween(value[0], value[1])) {
            if (monthlyIncome[key] === undefined) {
              monthlyIncome[key] = income.amount;
            } else {
              monthlyIncome[key] += income.amount;
            }
          } else {
            if (monthlyIncome[key] === undefined) {
              monthlyIncome[key] = 0;
            }
          }
        }
      }
      res.send(monthlyIncome);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
