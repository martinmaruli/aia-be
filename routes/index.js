const express = require("express")
const router = express.Router()
const getFlickr = require("./getFlickr")

router.use("/api/v1", getFlickr)

module.exports = router