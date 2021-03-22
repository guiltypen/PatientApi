module.exports = (sequelize, DataTypes) => {
  const Hospital_Doctors = sequelize.define(
    "hospital_doctors",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      selfGranted: DataTypes.BOOLEAN,
    },
    { timestamps: false }
  );

  return Hospital_Doctors;
};
