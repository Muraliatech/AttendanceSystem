const express = require("express");
const router = express.Router();

const validate = require("./validate");

const dashboardRoutes = require("./dashboards");
const loginRoutes = require("./login");
const registerRoutes = require("./registration");
const homeRoutes = require("./home");
const operationsRoutes = require("./operations");
const attendanceRoutes = require("./attendanceController")


router.use("/api/login", loginRoutes);
router.use("/api/dashboard", dashboardRoutes);
router.use("/api/register", registerRoutes);
router.use("/api/home", homeRoutes);
router.use("/api/operations", operationsRoutes);
router.use("/api/validate", validate);
router.use("/api/attendanceController",attendanceRoutes);
module.exports = router;
