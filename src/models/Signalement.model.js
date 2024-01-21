const Sequelize = require("sequelize");
const sequelize = require("../db");
const Commentaire = require("./Commentaire");
const Terme = require("./Terme");

const Signalement = sequelize.define(
  "signalements",
  {
    commentaire_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Commentaire,
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
    type_contenu: {
      type: Sequelize.ENUM,
      values: ["Commentaire", "Terme"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Signalement;
