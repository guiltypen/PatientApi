const { Doctor } = require("../db/models");

exports.fetchHospital = async (hospitalId, next) => {
  try {
    const hospital = await Hospital.findByPk(hospitalId);
    return hospital;
  } catch (error) {
    next(error);
  }
};

//doctor List
exports.doctorList = async (req, res, next) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
  } catch (error) {
    next(error);
  }
};

// create doctor
exports.doctorCreate = async (req, res, next) => {
  try {
    const newDoctor = await Doctor.create(req.body);
    res.status(201).json(newDoctor);
  } catch (error) {
    next(error);
  }
};

//Delete hospital
exports.doctorDelete = async (req, res, next) => {
  try {
    await req.doctor.destroy(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

// update hospital
exports.doctorUpdate = async (req, res, next) => {
  try {
    await req.doctor.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
