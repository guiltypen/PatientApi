const { Doctor, Hospital } = require("../db/models");

exports.fetchDoctor = async (doctorId, next) => {
  try {
    const doctor = await Doctor.findByPk(doctorId);
    return doctor;
  } catch (error) {
    next(error);
  }
};

//doctor List
exports.doctorList = async (req, res, next) => {
  try {
    const doctors = await Doctor.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Hospital,
        as: "hospital",
        attributes: ["name"],
      },
    });
    res.json(doctors);
  } catch (error) {
    next(error);
  }
};

//Delete Doctor
exports.doctorDelete = async (req, res, next) => {
  try {
    await req.doctor.destroy(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

// update doctor
exports.doctorUpdate = async (req, res, next) => {
  try {
    await req.doctor.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
