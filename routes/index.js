module.exports = (app) => {
  const category = require("../controllers/category.controller");
  const expense = require("../controllers/expense.controller");
  const income = require("../controllers/income.controller");
  const month = require("../controllers/month.controller");
  const { isAuth, login, signup } = require("../controllers/auth.controller");
  var router = require("express").Router();

  //   router.get("/private", isAuth);
  router.post("/login", login);
  router.post("/signup", signup);
  // Create a new Tutorial
  //   router.post("/user/add", isAuth, user.create);

  router.get("/category", isAuth, category.findAll);

  //

  router.post("/category/add", isAuth, category.create);

  // Retrive all expenses
  router.get("/expense", isAuth, expense.findAll);

  //retrieve all expenses of user
  router.post("/expense/user", isAuth, expense.findExpenseOfUser);

  // create expense
  router.post("/expense/add", isAuth, expense.create);

  //get monthly expense
  router.get("/expense/month", isAuth, month.calculateExpense);

  // Retrive all income
  router.get("/income", isAuth, income.findAll);

  //   //retrieve all income of user
  router.post("/income/user", isAuth, income.findIncomeOfUser);

  // create income
  router.post("/income/add", isAuth, income.create);

  //get monthly expense
  router.get("/income/month", isAuth, month.calculateIncome);

  app.use("/api", router);
};
