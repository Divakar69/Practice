const router = require("express").Router()
const controller = require("../controller/test")

router.get("/test/",controller.testFun)

module.exports = {router};