const Sequelize = require("sequelize");
const sequelize = require("../db");
const User = require("./User");
const Terme = require("./Terme");

const Commentaire = sequelize.define(
  "commentaires",
  {
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        // This is the column name of the referenced model
        key: "id",
      },
    },
    terme_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Terme,
        // This is the column name of the referenced model
        key: "id",
      },
    },
    contenu: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Commentaire;
