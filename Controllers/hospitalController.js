const { Hospital } = require("../db/models");

exports.fetchHospital = async (hospitalId, next) => {
  try {
    const hospital = await Hospital.findByPk(hospitalId);
    return hospital;
  } catch (error) {
    next(error);
  }
};

//hospital List
exports.hospitalList = async (req, res, next) => {
  try {
    const hospitals = await Hospital.findAll();
    res.json(hospitals);
  } catch (error) {
    next(error);
  }
};

// create hospital
exports.hospitalCreate = async (req, res, next) => {
  try {
    const newHospital = await Hospital.create(req.body);
    res.status(201).json(newHospital);
  } catch (error) {
    next(error);
  }
};

//Delete hospital
exports.hospitalDelete = async (req, res, next) => {
  try {
    await req.hospital.destroy(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

// update hospital
exports.hospitalUpdate = async (req, res, next) => {
  try {
    await req.patient.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

// exports.patientCreate = async (req, res, next) => {
//   try {
//     req.body.hospitalId = req.hospital;
//     const newPatient = await Patient.create(req.body);
//     res.status(201).json(newPatient);
//   } catch (error) {
//     res.json({ message: error });
//   }
//   next();
// };
