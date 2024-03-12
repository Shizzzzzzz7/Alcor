const {BookingService} = require("../services/index");

const bookingService = new BookingService();

const bookRoom = async(req, res)=>{
    try {
        req.body.startTime = new Date(req.body.startTime);
        req.body.endTime = new Date(req.body.endTime);
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
        const response = await bookingService.updateBooking(req.query, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Booking Updated Successfully",
            err:{}
        });
    }catch(error){
        console.log("Error in Booking Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update Booking",
            err:{error}
        });
    }
}

const deleteDetails = async(req,res)=>{
    try{
        const response = await bookingService.deletBooking(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Booking Deleted Successfully",
            err:{}
        });
    }catch(error){
        console.log("Error in Booking Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete Booking",
            err:{error}
        });
    }
}

const getAllBookingDetails = async(req,res)=>{
    try{
        const response = await bookingService.getAllBookingByFilter(req.query);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Booking Details Fetched Successfully",
            err:{}
        });
    }catch(error){
        console.log("Error in Booking Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch Booking details",
            err:{error}
        });
    }
}

const checkBooking = async(req,res)=>{
    try{
        const response = await bookingService.getBookingByTime(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Booking Details Fetched Successfully",
            err:{}
        });
    }catch(error){
        console.log("Error in Booking Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch Booking details",
            err:{error}
        });
    }
}

const sendUserData = async(req,res)=>{
    try{
        const response = await bookingService.getUserData(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Booking Details Fetched Successfully",
            err:{}
        });
    }catch(error){
        console.log("Error in Booking Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch Booking details",
            err:{error}
        });
    }
}

module.exports = {
    bookRoom,
    updateDetails,
    deleteDetails,
    getAllBookingDetails,
    checkBooking,
    sendUserData
}