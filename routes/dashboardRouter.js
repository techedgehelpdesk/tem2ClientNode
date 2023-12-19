const dashboardController = require('../controllers/dashboardController.js')

const router = require("express").Router();

router.get("/dashboardDetails", dashboardController.dashboardDetails);

module.exports = router;