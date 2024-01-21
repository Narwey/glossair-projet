const Sequelize = require("sequelize");
const sequelize = require("../db");

const Domaine = sequelize.define(
  "domaines",
  {
    // domaine_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: Domaine,
    //     // This is the column name of the referenced model
    //     key: "id",
    //   },
    // },.
    domaine_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    intitule: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Domaine;
