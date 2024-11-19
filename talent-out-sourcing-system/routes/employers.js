const express = require('express');
const router = express.Router();
const employerControll = require('../controllers/employerControll')
const path = require('path');
let Jobs = require("../models/jobModel")




//employer service first page
router.get('/', employerControll.index);

//job posting page
router.get('/post', (req, res) => {
    const filePath = path.join(__dirname, '..', 'test', 'index.html');
    res.sendFile(filePath);
})

router.post('/submit', async (req, res) => {
    try{
        let newJob = new Jobs({
            jobName: req.body.jobName,
            JobType: req.body.jobType,
            GPA: req.body.gpa,
            Date: req.body.date
        })
        await newJob.save()
        res.send('Form submitted successfully')
        console.log(newJob)
        }catch(e){
          console.log(e.message)
    }
})

//posted jobs page
router.get('/posted', employerControll.posted);

//applied jobs page
router.get('/applied', employerControll.candidate)

//create employer - we dont need this, i just created this for us to create dummy employer inorder to test our functionalities 
router.get('/create', employerControll.createEmployer)

module.exports = router;
