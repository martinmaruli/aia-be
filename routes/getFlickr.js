const express = require("express")
const router = express.Router()
const { getFlickr } = require("../controller/getFlickr")

router.post("/getFlickr", getFlickr)

module.exports = router