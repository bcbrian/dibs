const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  const Users = sequelize.define("Users", {
    name: { type: DataTypes.STRING, allowNull: false },

    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  });
  Users.associate = function(models) {
    // Users.hasMany(models.tripUsers);
  };
  return Users;
};
