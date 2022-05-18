const { Router } = require("express");
const express = require("express")
let router = express.Router();
const mainController = require("../controllers/mainController.js")


router.get("/", mainController.index)
router.get("/playas", mainController.playas)
router.get("/camping", mainController.camping)
router.get("/noche", mainController.noche)
router.get("/alquileres", mainController.alquileres)
router.get("/spots", mainController.spots)
router.get("/afters", mainController.afters)

module.exports = router 