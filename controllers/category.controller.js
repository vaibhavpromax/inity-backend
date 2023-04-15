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

const bulkCreateCategories = async (req, res) => {
  const categories = [
    {
      name: "Groceries",
      emoji: "🛒",
    },
    {
      name: "Transportation",
      emoji: "🚗",
    },
    {
      name: "Entertainment",
      emoji: "🎭",
    },
    {
      name: "Bills",
      emoji: "📝",
    },
    {
      name: "Clothing",
      emoji: "👕",
    },
    {
      name: "Health",
      emoji: "💊",
    },
    {
      name: "Other",
      emoji: "🤷‍♂️",
    },
    {
      name: "EMI's",
      emoji: "💳",
    },
    {
      name: "Food",
      emoji: "🥝",
    },
    {
      name: "Taxes",
      emoji: "📝",
    },
    {
      name: "Healthcare",
      emoji: "🏥",
    },
    {
      name: "Education",
      emoji: "📚",
    },
    {
      name: "Investment",
      emoji: "💹",
    },
  ];

  await Category.bulkCreate(categories)
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

bulkCreateCategories();

exports.findAll = (req, res) => {
  Category.findAll()
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
