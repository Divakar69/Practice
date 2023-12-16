const express = require("express")
const routerIndex = require("./routes/routesIndex.js")
const app = express()
const router = express.Router()
port = 1080
router.route("/",routerIndex)
// app.get("/",(req,res,next)=>{
//     res.send({
//         "message":"Shiva"
//     })
// })
app.listen(port,()=>{
    console.log(`listining from ${port}`)
})