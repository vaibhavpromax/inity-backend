const db = require("../models");
const Income = db.income;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.amount) {
    res.status(400).send({
      message: "amount can not be empty!",
    });
    return;
  }
  const income = {
    date: req.body.date,
    amount: req.body.amount,
    user_id: req.body.userId,
    description: req.body.description,
  };

  Income.create(income)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the income.",
      });
    });
};

exports.findAll = (req, res) => {
  Income.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categories.",
      });
    });
};

exports.findIncomeOfUser = (req, res) => {
  const id = req.body.user_id;
  Income.findAll({ where: { user_id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
