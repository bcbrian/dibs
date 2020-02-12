const Sequelize = require("sequelize");
const db = require("./");

module.exports = function(sequelize, DataTypes) {
  const Schedule = sequelize.define("Schedule", {
    morningMeal: DataTypes.STRING,
    afternoonMeal: DataTypes.STRING,
    eveningMeal: DataTypes.STRING,
    morningActivity: DataTypes.STRING,
    afternoonActivity: DataTypes.STRING,
    eveningActivity: DataTypes.STRING,
    date: { type: DataTypes.DATEONLY, allowNull: false }
  });
  Schedule.associate = function(models) {
    Schedule.belongsTo(models.Trips, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Schedule;
};
