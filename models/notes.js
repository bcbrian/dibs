const Sequelize = require("sequelize");
const db = require("./");

module.exports = function(sequelize, DataTypes) {
  const Notes = sequelize.define("Notes", {
    note: DataTypes.STRING
  });
  Notes.associate = function(models) {
    Notes.belongsTo(models.Trips, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Notes;
};
