const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100 },
    family_name: { type: String, required: true, maxLength: 100 },
})

module.exports = mongoose.model("Employer", EmployerSchema);