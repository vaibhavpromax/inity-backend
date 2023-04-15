module.exports = (sequelize, Sequelize) => {
  const Income = sequelize.define("income", {
    income_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    user_id: {
      type: Sequelize.UUID,
      // references: {
      //   model: "user",
      //   key: "user_id",
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

  return Income;
};
