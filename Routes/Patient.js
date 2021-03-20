const express = require("express");
const router = express.Router();

const {
  patientUpdate,
  patientDelete,
  patientList,
  fetchPatient,
  patientCreate,
} = require("../Controllers/patientController");
// get patients
router.get("/", patientList);

//create patient
router.post("/", patientCreate);

//delete patients
router.delete("/:patientId", patientDelete);

//Update patient

router.put("/:patientId", patientUpdate);

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

module.exports = router;
