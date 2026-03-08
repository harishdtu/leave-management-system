const express = require("express");
const router = express.Router();

const Leave = require("../models/Leave");
const auth = require("../middleware/authMiddleware");


// Apply Leave (Employee)

router.post("/apply",auth,async(req,res)=>{

try{

const {leaveType,startDate,endDate,reason} = req.body;

const leave = new Leave({

employeeId:req.user.id,

leaveType,
startDate,
endDate,
reason

});

await leave.save();

res.json(leave);

}catch(err){

res.status(500).json(err);

}

});


// Employee View Own Leaves

router.get("/my",auth,async(req,res)=>{

const leaves = await Leave.find({

employeeId:req.user.id

});

res.json(leaves);

});


// Employer View All Leaves

router.get("/all",auth,async(req,res)=>{

const leaves = await Leave.find()

.populate("employeeId","name email");

res.json(leaves);

});


// Approve Leave

router.put("/:id/approve",auth,async(req,res)=>{

await Leave.findByIdAndUpdate(

req.params.id,

{status:"Approved"}

);

res.json({message:"Leave Approved"});

});


// Reject Leave

router.put("/:id/reject",auth,async(req,res)=>{

await Leave.findByIdAndUpdate(

req.params.id,

{status:"Rejected"}

);

res.json({message:"Leave Rejected"});

});

module.exports = router;