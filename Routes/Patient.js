const express = require("express");
const router = express.Router();

const {
  patientCreate,
  patientUpdate,
  patientDelete,
  patientList,
  fetchPatient,
} = require("../Controllers/patientController");
// get patients

router.get("/", patientList);

//delete patients
router.delete("/:patientId", patientDelete);

//Update patient

router.put("/:patientId", patientUpdate);
module.exports = router;

router.param("patientId", async (req, res, next, patientId) => {
  const patient = await fetchPatient(patientId, next);
  if (patient) {
    req.patient = patient;
    next();
  } else {
    const err = new Error("patient Not Found");
    err.status = 404;
    next(err);
  }
});
