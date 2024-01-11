const router = require("express").Router()
const test = require("../controller/test")
const nameNumber = require("../controller/nameNumber")

router.get("/test/",test.testFun)
router.get("/nameNumber/",nameNumber.nameNumber)

module.exports = {router};