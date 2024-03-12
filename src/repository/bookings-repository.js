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

    async getOne(data){
        try {
            const booking = await Booking.findOne({
                roomNumber: data.roomNumber,
                $or: [
                    
                    { startTime: { $gte: data.startTime, $lte: data.endTime } },
                    
                    { endDate: { $gte: data.startTime, $lte: data.endTime } },
                   
                    { $and: [{ startTime: { $lte: data.startTime } }, { endTime: { $gte: data.endTime } }] },
                  ]
            });

            if(booking)
            return true;
            
            return false
        } catch (error) {
            console.log("Error Occured in Booking Repository");
            throw error;
        }
    }

    async getData(data){
        try {
            const user = await Booking.findOne(data);
            return user;
        } catch (error) {
            console.log("Error Occured in Booking Repository");
            throw error;
        }
    }
}

module.exports = BookingRepository;