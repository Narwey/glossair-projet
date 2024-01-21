const Sequelize = require("sequelize");
const sequelize = require("../db");
const Domaine = require("./Domaine");

const Terme = sequelize.define(
  "termes",
  {
    domaine_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Domaine,
        // This is the column name of the referenced model
        key: "id",
      },
    },
    inititule: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isHidden: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Terme;
