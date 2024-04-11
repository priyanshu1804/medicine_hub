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
        if(!(await checkDonerRole(req.user.id)))
            return res.status(403).json({message: 'user does not have doner role'});

        const data = req.body
        const newMedicine = new Medicine(data);
        const response = await newMedicine.save();
        console.log('data saved');
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
        if(!(await checkDonerRole(req.user.id)))
            return res.status(403).json({message: 'user does not have doner role'});
        
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
router.get('/med', jwtAuthMiddleware, async (req, res) => {
    try {
        const medicineData = req.user;
        console.log("medicine data:", medicineData);
        const medicineName = req.query.name;
        const medicine = await Medicine.find({ name: medicineName });
        if (!medicine) {
            return res.status(404).json({ error: "Medicine not found" });
        }
        res.status(200).json({ medicine: medicine });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;