const express = require("express")
const router = express.Router()
const { getFlickr } = require("../controller/getFlickr")

router.get("/getFlickr", getFlickr)

module.exports = router