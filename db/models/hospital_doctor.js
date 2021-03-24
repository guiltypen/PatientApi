module.exports = (sequelize, DataTypes) => {
  const Hospital_Doctors = sequelize.define("hospital_doctors", {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  });

  return Hospital_Doctors;
};
