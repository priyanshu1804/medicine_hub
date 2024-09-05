const express=require('express');
const cors = require('cors');
const app = express();
const db=require('./db');
const userroute=require('./routes/userRoutes.js');
const medicineroute=require('./routes/medicineRoutes.js');
const bodyParser=require('body-parser');
// app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
// require('dotenv').config();
const PORT=process.env.PORT||3000;
app.use('/user',userroute)
app.use('/medicine',medicineroute)

app.listen(3000,()=>{
    console.log('connected to server 3000');
});