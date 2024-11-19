let mongoose = require('mongoose')

let jobSchema = new mongoose.Schema({
    jobName: String,
    JobType: String,
    GPA: Number,
    Date: Date
})

module.exports = mongoose.model("Jobs", jobSchema)