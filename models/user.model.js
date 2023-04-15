module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    email: {
      type: Sequelize.STRING,
      required: true,
    },
    password: {
      type: Sequelize.STRING,
      required: true,
    },
    gender: {
      type: Sequelize.STRING,
      required: true,
    },
    name: {
      type: Sequelize.STRING,
      required: true,
    },
    avatar_link: {
      required: true,
      type: Sequelize.STRING,
    },
  });

  return User;
};
