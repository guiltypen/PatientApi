const express = require("express");
const router = express.Router();

const {
  hospitalCreate,
  hospitalUpdate,
  hospitalDelete,
  hospitalList,
  fetchHospital,
  patientCreate,
  doctorCreate,
} = require("../Controllers/hospitalController");

router.param("hospitalId", async (req, res, next, hospitalId) => {
  const hospital = await fetchHospital(hospitalId, next);
  if (hospital) {
    req.hospital = hospital;
    next();
  } else {
    const err = new Error("hospital Not Found");
    err.status = 404;
    next(err);
  }
});

// get hospitals

router.get("/", hospitalList);

//delete patients
router.delete("/:hospitalId", hospitalDelete);

// create hospital
router.post("/", hospitalCreate);

//Update patient

router.put("/:hospitalId", hospitalUpdate);

// create patient
router.post("/:hospitalId/patients", patientCreate);

// create doctor
router.post("/:hospitalId/doctors", doctorCreate);

module.exports = router;
