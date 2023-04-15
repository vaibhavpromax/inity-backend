//calculate monthly income and expense
const db = require("../models");
const moment = require("moment");
const Expense = db.expense;
const Income = db.income;

const monthranges = {
  January: [
    moment().month(0).startOf("month").unix(),
    moment().month(0).endOf("month").unix(),
  ],
  February: [
    moment().month(1).startOf("month").unix(),
    moment().month(1).endOf("month").unix(),
  ],
  March: [
    moment().month(2).startOf("month").unix(),
    moment().month(2).endOf("month").unix(),
  ],
  April: [
    moment().month(3).startOf("month").unix(),
    moment().month(3).endOf("month").unix(),
  ],
  May: [
    moment().month(4).startOf("month").unix(),
    moment().month(4).endOf("month").unix(),
  ],
  June: [
    moment().month(5).startOf("month").unix(),
    moment().month(5).endOf("month").unix(),
  ],
  July: [
    moment().month(6).startOf("month").unix(),
    moment().month(6).endOf("month").unix(),
  ],
  August: [
    moment().month(7).startOf("month").unix(),
    moment().month(7).endOf("month").unix(),
  ],
  September: [
    moment().month(8).startOf("month").unix(),
    moment().month(8).endOf("month").unix(),
  ],
  October: [
    moment().month(9).startOf("month").unix(),
    moment().month(9).endOf("month").unix(),
  ],
  November: [
    moment().month(10).startOf("month").unix(),
    moment().month(10).endOf("month").unix(),
  ],
  December: [
    moment().month(11).startOf("month").unix(),
    moment().month(11).endOf("month").unix(),
  ],
};

// calculate expense of every month
exports.calculateExpense = (req, res) => {
  Expense.findAll()
    .then((data) => {
      const monthlyExpense = [];
      for (let i = 0; i < data.length; i++) {
        const expense = data[i];
        const expenseDate = moment(expense.dataValues.date);
        for (const [key, value] of Object.entries(monthranges)) {
          if (expenseDate.isBetween(value[0], value[1])) {
            monthlyExpense.push({
              month: key,
              expense: expense.amount,
            });
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
      const monthlyIncome = [];
      for (let i = 0; i < data.length; i++) {
        const income = data[i];
        const incomeDate = moment(income.dataValues.date);
        for (const [key, value] of Object.entries(monthranges)) {
          if (incomeDate.isBetween(value[0], value[1])) {
            monthlyIncome.push({
              month: key,
              income: income.amount,
            });
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
