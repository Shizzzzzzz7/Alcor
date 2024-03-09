const {BookingService} = require("../services/index");

const bookingService = new BookingService();

const bookRoom = async(req, res)=>{
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Booking Created Successfully",
            err:{}
        });
    } catch (error) {
        console.log("Error in Booking Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create Booking",
            err:{error}
        });
    }
}

const updateDetails = async(req,res)=>{
    try{
        const response = await bookingService.updateBooking(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Booking Created Successfully",
            err:{}
        });
    }catch(error){
        console.log("Error in Booking Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create Booking",
            err:{error}
        });
    }
}


module.exports = {
    bookRoom,
    updateDetails
}