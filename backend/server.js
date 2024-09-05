const express=require('express');
const cors = require('cors');
const app = express();
const db=require('./db');
const userroute=require('./routes/userRoutes.js');
const medicineroute=require('./routes/medicineRoutes.js');
const bodyParser=require('body-parser');
app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
  });

app.use(bodyParser.json());
const PORT=process.env.PORT||3000;
app.use('/user',userroute)
app.use('/medicine',medicineroute)

app.listen(3000,()=>{
    console.log('connected to server 3000');
});