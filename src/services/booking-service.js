const {BookingRepository} = require("../repository/index");
const mailer = require("../utils/mailer");

class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try {
            const booking = await this.bookingRepository.create(data);
            await mailer(booking);
            return booking;
        } catch (error) {
            console.log("Error Occured in Booking Service");
            throw error;
        }
    }

    async updateBooking(query, newData){
        try {
            const response = await this.bookingRepository.update(query,newData);
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Service");
            throw error;
        }
    }

    async deletBooking(query){
        try {
            const response = await this.bookingRepository.delete(query);
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Service");
            throw error;
        }
    }

    async getAllBookingByFilter(data){
        try {
            const response = await this.bookingRepository.getAll(data);
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Service");
            throw error;
        }
    }

}

module.exports = BookingService;