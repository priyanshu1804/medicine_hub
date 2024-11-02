const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {jwtAuthMiddleware, generateToken} = require('../jwt');
const Medicine = require('../models/medicine');

const checkDonerRole = async (userID) => {
   try{
        const user = await User.findById(userID);
        if(user.role === 'Doner'){
            return true;
        }
   }catch(err){
        return false;
   }
}
router.post('/',jwtAuthMiddleware,async(req, res) =>{
    try{
        // if(!(await checkDonerRole(req.user.id)))
        //     return res.status(403).json({message: 'user does not have doner role'});
        
        const data = req.body
        const newMedicine = new Medicine(data);
        
        newMedicine.donatedBy = req.user.name;
        console.log(req.user.name);

        // newMedicine.donatedBy ="123908";
        const response = await newMedicine.save();
        console.log();
        res.status(200).json({response: response});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.put('/:medicineID',jwtAuthMiddleware, async (req, res)=>{
    try{
        if(!(await checkDonerRole(req.user.id))){
            return res.status(403).json({message: 'user does not have doner role'});
        }
        const medicineID = req.params.medicineID;
        const updatedMedicineData = req.body;
        const response = await Medicine.findByIdAndUpdate(medicineID, updatedMedicineData,{
            new: true,
            runValidators: true
        })
        if (!response) {
            return res.status(404).json({ error: 'medicine not found' });
        }
        console.log('medicine data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.delete('/:medicineID',jwtAuthMiddleware, async (req, res)=>{
    try{
       
        const medicineID = req.params.medicineID;
        const response = await Medicine.findByIdAndDelete(medicineID);
        if (!response) {
            return res.status(404).json({ error: 'medicine not found' });
        }
        console.log('medicine deleted');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/info/:medicineID', jwtAuthMiddleware, async (req, res) => {
    try {
        const medId = req.params.medicineID;

        const medicine = await Medicine.findOne({
            _id:medId
        });

        res.json({
            medicine
        })
       
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/all',jwtAuthMiddleware, async (req,res)=>{
        const filter = req. query.filter;
        const data = await Medicine.find({
        $or:[{
            name:{$regex:filter}
         },{
             salt:{$regex:filter}
         }]
    });
    const filterData = data.filter(med=>{
        if(med.donatedBy!=req.user.name){
            return true;
        }
        return false;
    });
   
    console.log(filterData)
    res.json({
        data:filterData
    })
})

router.get('/my',jwtAuthMiddleware,async (req,res)=>{
    const data = await Medicine.find({
        donatedBy: req.user.name
    });
    res.json({
        data:data
    })
})
module.exports = router;
