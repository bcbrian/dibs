const Sequelize = require("sequelize");
const db = require("./");

module.exports = function(sequelize, DataTypes) {
  const Bedrooms = sequelize.define("Bedrooms", {
    reserved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    name: DataTypes.STRING,
    aboutRoom: DataTypes.STRING
  });
  Bedrooms.associate = function(models) {
    Bedrooms.belongsTo(models.Trips, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Bedrooms;
};
