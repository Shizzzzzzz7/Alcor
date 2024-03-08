const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomNumber : {
        type: Number,
        required: true,
        unique: true
    },
    roomType:{
        type: String,
        enum: ['A', 'B', 'C'],
        required: true
    },
    pricePerHour:{
        type: Number,
        required: true
    },
    bookingStatus:{
        type: Boolean,
        default: false
    }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;