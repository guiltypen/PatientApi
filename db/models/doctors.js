const SequelizeSlugify = require("sequelize-slugify");
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define("Doctor", {
    DoctorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    DoctorQualitfication: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  SequelizeSlugify.slugifyModel(Doctor, {
    source: ["DoctorName"],
  });
  return Doctor;
};
