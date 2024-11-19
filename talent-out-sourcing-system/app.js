const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const port = 5000;


app.use(express.urlencoded({ extended: true }));


//ROUTES
const indexRouter = require('./routes/index')
const employerRouter = require('./routes/employers')
const studentRouter = require('./routes/students')
const messageRouter = require('./routes/message')
const profileRouter = require('./routes/profile')


app.use("/", indexRouter);
app.use("/employers", employerRouter);
app.use("/students", studentRouter);
app.use("/message", messageRouter);
app.use("/profile", profileRouter)

// View engine setup - for displaying the dynamic front end content
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "pug");

// Set up mongoose connection
mongoose.set("strictQuery", false);

const mongoDB = "mongodb://localhost:27017/jobportal";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


//START THE SERVER  
app.listen(port, () => {
    console.log(`the server is listening at http://localhost: ${port}`)
})
