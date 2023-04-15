module.exports = (sequelize, Sequelize) => {
  const Month = sequelize.define("month", {
    month_id: {
      type: Sequelize.UUID,
      primaryKey: true, 
    },
    name: {
      type: Sequelize.STRING,
    },
    expense: {
      type: Sequelize.FLOAT,
    },
    income: {
      type: Sequelize.FLOAT,
    },
  });

  return Month;
};
