const db = require("../models");
const Expense = db.expense;
const Category = db.category;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.amount) {
    res.status(400).send({
      message: "amount can not be empty!",
    });
    return;
  }
  const expense = {
    date: req.body.date,
    amount: req.body.amount,
    category_id: req.body.categoryId,
    user_id: req.body.userId,
    description: req.body.description,
  };

  Expense.create(expense)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the expense.",
      });
    });
};

exports.findAll = (req, res) => {
  Expense.findAll({ include: Category })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving expenses.",
      });
    });
};

exports.findExpenseOfUser = (req, res) => {
  const id = req.body.user_id;
  Expense.findAll({ where: { user_id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Expense with id=" + id,
      });
    });
};
