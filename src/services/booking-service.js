const {BookingRepository} = require("../repository/index");

class BookingService{
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try {
            const booking = await this.bookingRepository.create(data);
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

}

module.exports = BookingService;