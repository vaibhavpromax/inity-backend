const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);
db.expense = require("./expense.model.js")(sequelize, Sequelize);
db.income = require("./income.model.js")(sequelize, Sequelize);
db.month = require("./month.model.js")(sequelize, Sequelize);

db.category.hasMany(db.expense, { as: "expenses", foreignKey: "category_id" });
db.expense.belongsTo(db.category, {
  foreignKey: "category_id",
  // as: "category",
});
db.user.hasMany(db.expense, { as: "expenses", foreignKey: "user_id" });
db.expense.belongsTo(db.user, {
  foreignKey: "user_id",
  // as: "user",
});

// const db = require("../models");
// const Month = db.month;

// const bulkCreateMonths = (req, res) => {
//   const months = [
//     {
//       name: "January",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "February",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "March",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "April",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "May",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "June",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "July",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "August",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "September",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "October",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "November",
//       expense: 0,
//       income: 0,
//     },
//     {
//       name: "December",
//       expense: 0,
//       income: 0,
//     },
//   ];

//   Month.bulkCreate(months)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Category.",
//       });
//     });
// };

// bulkCreateMonths();

module.exports = db;
