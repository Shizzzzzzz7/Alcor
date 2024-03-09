const {Booking} = require("../models/index");

class BookingRepository{

    async create(data){
        try {
            const result = await Booking.create(data);
            return result;
        } catch (error) {
            console.log("Error Occured in Booking Repository");
            throw error;
        }
    }

    async update(id, newData){
        try {
            const response = await Booking.findByIdAndUpdate(id, newData);
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Repository");
            throw error;
        }
    }
}

module.exports = BookingRepository;