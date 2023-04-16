module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    category_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    user_id: {
      type: Sequelize.UUID,
    },
    name: {
      type: Sequelize.STRING,
    },
    emoji: {
      type: Sequelize.STRING,
    },
  });

  return Category;
};
