const express = require('express')
const cors = require('cors')
const app = express()
const UserRoute = require('./routes/UserRoute')
const port = 5000;

//middleware
// app.use(cors)
// app.use(express.json())
app.use(UserRoute)
app.listen(port,()=>
{
    console.log(`Server berjalan di port : ${port}`)
})