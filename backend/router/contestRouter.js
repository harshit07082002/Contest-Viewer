const express = require("express");
const contestController = require("../controller/contestController");
const router = express.Router();

router.route("/").get(contestController.getAllContests);
router.route("/:platform").get(contestController.getContests);

module.exports = router;
