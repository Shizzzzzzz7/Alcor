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

    async update(query, newData){
        try {
            const response = await Booking.findOneAndUpdate(query, newData);
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Repository");
            throw error;
        }
    }

    async delete(query){
        try {
            const response = await Booking.findOneAndUpdate(query, {bookingStatus: 'Passed'});
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Repository");
            throw error;
        }
    }

    async getAll(data){
        try {
            const response = await Booking.find(data);
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Repository");
            throw error;
        }
    }
}

module.exports = BookingRepository;