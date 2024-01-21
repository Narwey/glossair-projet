const Sequelize = require("sequelize");
const sequelize = require("../db");

const UserToken = sequelize.define(
  "users_token",
  {
    user_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserToken;
