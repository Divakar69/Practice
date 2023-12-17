const express = require("express")
const routerIndex = require("./routes/routesIndex.js")
const app = express();
// const router = express.Router()
app.use(express.json())
port = 1080
app.use("/",routerIndex.router)
// app.get("/",(req,res,next)=>{
//     res.send({
//         "message":"Shiva"
//     })
// })
app.listen(port,()=>{
    console.log(`listining from ${port}`)
})