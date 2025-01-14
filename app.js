const express = require("express");
const patientRoutes = require("./Routes/Patient");
const hospitalsRoutes = require("./Routes/Hospital");
const doctorsRoutes = require("./Routes/doctors");
const db = require("./db/models");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// assign routes to url
app.use("/patients", patientRoutes);
app.use("/hospital", hospitalsRoutes);
app.use("/doctors", doctorsRoutes);
//HomePage
app.get("/", (req, res) => {
  console.log("*** Patient DataBase ***");
  res.json({ message: "Patients DataBase" });
});
//Path Not found message for wrong paths
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

//Error Handling Middleware. * 500 for error with no message or a status code
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
