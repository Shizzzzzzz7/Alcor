const {BookingRepository} = require("../repository/index");
const mailer = require("../utils/mailer");

class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try {
            const booking = await this.bookingRepository.create(data);
            await mailer(data.userEmail);
            return booking;
        } catch (error) {
            console.log("Error Occured in Booking Service");
            throw error;
        }
    }

    async updateBooking(id, newData){
        try {
            const response = await this.bookingRepository.update(id,newData);
            return response;
        } catch (error) {
            console.log("Error Occured in Booking Service");
            throw error;
        }
    }

    async deletBooking(id){
        try {
            const response = await this.bookingRepository.delete(id);
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