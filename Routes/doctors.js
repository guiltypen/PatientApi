const express = require("express");
const router = express.Router();

const {
  doctorUpdate,
  doctorDelete,
  doctorList,
  fetchDoctor,
} = require("../Controllers/doctorsControllers");

router.param("doctorId", async (req, res, next, doctorId) => {
  const doctor = await fetchDoctor(doctorId, next);
  if (doctor) {
    req.doctor = doctor;
    next();
  } else {
    const err = new Error("doctor Not Found");
    err.status = 404;
    next(err);
  }
});

// get doctors
router.get("/", doctorList);

//delete patients
router.delete("/:doctorId", doctorDelete);

// // create doctor
// router.post("/", doctorCreate);

//Update patient

router.put("/:doctorId", doctorUpdate);

module.exports = router;
