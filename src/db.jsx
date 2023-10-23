const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/loginsignup")
.then(() => {
    console.log("Database Connected");
})
.catch(() => {
    console.log("Faild to connect!");
})

const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema);

module.exports = collection;