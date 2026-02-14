const express=require('express');
const cors=require('cors');
require('dotenv').config();
const connectDB = require("./config/db");
const app=express()
const PORT=4000
// middleware
app.use(express.json())
app.use(cors());
// db connection 
connectDB()
app.get('/',(req,res)=>{
    res.send("API Working");
})
app.listen(PORT,()=>{
    console.log(`Server started on http :// localhost :${PORT}`)
})
