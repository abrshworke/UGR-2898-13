const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 }
})

module.exports = mongoose.model("Student", StudentSchema)