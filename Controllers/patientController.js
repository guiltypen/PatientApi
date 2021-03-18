const { Patient } = require("../db/models");

exports.fetchPatient = async (patientId, next) => {
  try {
    const patient = await Patient.findByPk(patientId);
    return patient;
  } catch (error) {
    next(error);
  }
};

//Delete
exports.patientDelete = async (req, res, next) => {
  const { patientId } = req.params;
  try {
    await req.patient.destroy(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

//PatientList
exports.patientList = async (req, res, next) => {
  try {
    const patients = await Patient.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(patients);
  } catch (error) {
    next(error);
  }
};

//update
exports.patientUpdate = async (req, res, next) => {
  try {
    await req.patient.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
