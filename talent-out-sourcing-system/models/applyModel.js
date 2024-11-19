let mongoose = require('mongoose')

let applySchema = new mongoose.Schema({
    JobName: String,
    FullName: String,
    Age: String,
    GPA: Number,
    Date: Date
})

module.exports = mongoose.model("appliedJobs", applySchema)