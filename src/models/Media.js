const Sequelize = require("sequelize");
const sequelize = require("../db");
const Terme = require("./Terme");

const Media = sequelize.define(
  "medias",
  {
    terme_id: {
      type: Sequelize.INTEGER,
      references: {
        model: Terme,
        // This is the column name of the referenced model
        key: "id",
      },
    },
    type: {
      type: Sequelize.ENUM,
      values: ["video", "audio", "image"],
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

module.exports = Media;
