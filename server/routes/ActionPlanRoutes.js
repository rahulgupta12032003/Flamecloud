const express = require('express');
const router = express.Router();

const ActionPlanModel = require("../models/ActionPlan");

router.get('/actionplans' , async (req, res) => {
   try {
     const Action_plans = await ActionPlanModel.find({});
     res.send(Action_plans);
   } 
   catch (error) {
    res.status(404).json({message : error});
   }
})


// POST

router.post('/actionplans', async (req, res) => {
    const { name } = req.body;

    if(!name){
        res.status(401).json({status:401,message:"fill all the data"})
    }

    const actionplans = new ActionPlanModel({ name });

    try {
        actionplans.save();
        res.send("Action Plans saved successfully")
    } catch (error) {
        res.status(404).json({message: error})
    }
})


module.exports = router;