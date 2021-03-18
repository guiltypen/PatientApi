const express = require("express");
let patients = require("./patients");
const slugify = require("slugify");
const patientRoutes = require("./Routes/Patient");
const hospitalsRoutes = require("./Routes/Hospital");
const db = require("./db/models");

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/patients", patientRoutes);
app.use("/hospital", hospitalsRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
