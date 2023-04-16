const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "amount can not be empty!",
    });
    return;
  }

  const category = {
    name: req.body.name,
    emoji: req.body.emoji,
    user_id: req.user.user_id,
  };

  Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
    });
};

exports.bulkCreateCategories = async (req) => {
  const categories = [
    {
      name: "Groceries",
      emoji: "🛒",
      user_id: req.user_id,
    },
    {
      name: "Transportation",
      emoji: "🚗",
      user_id: req.user_id,
    },
    {
      name: "Entertainment",
      emoji: "🎭",
      user_id: req.user_id,
    },
    {
      name: "Bills",
      emoji: "📝",
      user_id: req.user_id,
    },
    {
      name: "Clothing",
      emoji: "👕",
      user_id: req.user_id,
    },
    {
      name: "Health",
      emoji: "💊",
      user_id: req.user_id,
    },
    {
      name: "Other",
      emoji: "🤷‍♂️",
      user_id: req.user_id,
    },
    {
      name: "EMI's",
      emoji: "💳",
      user_id: req.user_id,
    },
    {
      name: "Food",
      emoji: "🥝",
      user_id: req.user_id,
    },
    {
      name: "Taxes",
      emoji: "📝",
      user_id: req.user_id,
    },
    {
      name: "Healthcare",
      emoji: "🏥",
      user_id: req.user_id,
    },
    {
      name: "Education",
      emoji: "📚",
      user_id: req.user_id,
    },
    {
      name: "Investment",
      emoji: "💹",
      user_id: req.user_id,
    },
  ];

  await Category.bulkCreate(categories);
  // .then((data) => {
  //   res.send(data);
  // })
  // .catch((err) => {
  //   res.status(500).send({
  //     message:
  //       err.message || "Some error occurred while creating the Category.",
  //   });
  // });
};

// bulkCreateCategories();

exports.findAll = (req, res) => {
  Category.findAll({ where: { user_id: req.user.user_id } })
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
