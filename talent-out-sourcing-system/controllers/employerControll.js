const asyncHandler = require("express-async-handler");
const Employer = require("../models/employerModel")
require("../routes/employers")
let Jobs = require("../models/jobModel")
let candidates = require("../models/applyModel")

//employer service first page
exports.index = asyncHandler
(async (req,res,next) => {
    res.render('employer_service')
})

//view job posting page
exports.post = asyncHandler(
    async (req,res,next) => {
        res.send('job posting page')
    }
)

//view posted page
exports.posted = asyncHandler(
    async (req,res,next) => {
      try{
        let jobs = await Jobs.find()
        res.render('studentposted', { jobs });
        console.log(jobs) 
      }catch(e){
        console.log(e.message)
      }
    }
)

exports.candidate = asyncHandler(
  async (req,res,next) => {
    try{
      let candidate = await candidates.find()
      res.render('applied', { candidate });
      console.log(candidate)
    }catch(e){
      console.log(e.message)
    }
  }
)


//create employer - we dont need this, i just created this for us to create dummy employer inorder to test our functionalities 
exports.createEmployer = asyncHandler(async (req, res, next) => {
  try {
    // Creating a new employer
    const newEmployer = await Employer.create({
      first_name: "abebe",
      family_name: "bekele",
    });

    // Sending a response
    res.status(201).json({ message: 'Employer created successfully', employer: newEmployer });
  } catch (error) {
    // Handling errors
    console.error('Error creating employer:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
