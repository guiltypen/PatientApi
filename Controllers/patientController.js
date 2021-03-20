const { Patient } = require("../db/models");

exports.fetchPatient = async (patientId, next) => {
  try {
    const patient = await Patient.findByPk(patientId);
    return patient;
  } catch (error) {
    next(error);
  }
};

//Patient List
exports.patientList = async (req, res, next) => {
  try {
    const patients = await Patient.findAll(
      //    {
      //   attributes: {
      //     exclude: ["createdAt", "updatedAt"],
      //     include: {
      //       model: Hospital,
      //       as: "Hospitals",
      //       attributes: ["id"],
      //     },
      //   },
      // });
      res.json(patients)
    );
  } catch (error) {
    next(error);
  }
};

// create patient
exports.patientCreate = async (req, res, next) => {
  try {
    // req.body.hospitalId = req.hospital.id;
    const newPatient = await Patient.create(req.body);
    res.status(201).json(newPatient);
  } catch (error) {
    res.json({ message: error });
  }
  next();
};

//Delete patient
exports.patientDelete = async (req, res, next) => {
  const { patientId } = req.params;
  try {
    await req.patient.destroy(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

//update patient
exports.patientUpdate = async (req, res, next) => {
  try {
    await req.patient.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
