module.exports = (sequelize, Sequelize) => {
  const Expense = sequelize.define("expense", {
    expense_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    user_id: {
      type: Sequelize.UUID,
     
    },
    category_id: {
      type: Sequelize.UUID,
      // references: {
      //   model: "category",
      //   key: "category_id",
      // },
    },
    date: {
      type: Sequelize.INTEGER,
    },
    amount: {
      type: Sequelize.FLOAT,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  // Expense.associate = function (models) {
  //   Expense.belongsTo(models.user, { foreignKey: "user_id", as: "company" });
  //   Expense.belongsTo(models.category, {
  //     foreignKey: "category_id",
  //     as: "category",
  //   });
  // };
  return Expense;
};
