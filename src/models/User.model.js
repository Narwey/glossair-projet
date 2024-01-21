const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "users",
  {
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prenom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surnom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isAllowed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isBlocked: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    role: {
      type: Sequelize.ENUM,
      values: ["Simple", "Moderateur", "Admin"],
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;
