//Need to test this
const Sequelize = require("sequelize");
const db = require("./");

module.exports = function(sequelize, DataTypes) {
  const Groceries = sequelize.define("Groceries", {
    groceryList: {
      type: DataTypes.STRING,

      get: function() {
        return JSON.parse(this.getDataValue("groceryList"));
      },
      set: function(val) {
        return this.setDataValue("groceryList", JSON.stringify(val));
      }
    }
  });

  Groceries.associate = function(models) {
    Groceries.belongsTo(models.Trips, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Groceries;
};
