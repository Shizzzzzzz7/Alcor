const mongoose = require("mongoose");

const dbConnect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://shizzzzzzz7:y7L0RdOIDYQNkQTK@hotel-db.as2itja.mongodb.net/?retryWrites=true&w=majority&appName=Hotel-DB");
        console.log("DB Connected");
    } catch (error) {
        console.log("Error in Connecting DB");
        console.log(error);
        throw error;
    }
}

module.exports = dbConnect;