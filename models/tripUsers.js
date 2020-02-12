module.exports = function(sequelize, DataTypes) {
  const tripUsers = sequelize.define("TripUsers", {
    UserId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    TripId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
  });
  // tripUsers.associate = function(models) {
  //   tripUsers.hasMany(models.Trips);
  //   tripUsers.hasMany(models.Users);
  // };
  return tripUsers;
};
