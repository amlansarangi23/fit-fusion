require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const app = express()
const workoutRoutes = require('./routes/workouts')
const cors = require("cors");


const corsOptions = {
    origin: "https://fit-fusion-frontend.onrender.com"
}


//middleware
app.use(express.json())
app.use(cors(corsOptions))

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT, ()=>{
    console.log('Connected to db and listening on port', process.env.PORT)
})
})
.catch((err) => {
    console.log(err);
})

//routes
app.use('/api/workouts',workoutRoutes)
