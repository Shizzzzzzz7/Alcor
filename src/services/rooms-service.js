const {RoomRepository} = require("../repository/index");

class RoomService{
    constructor(){
        this.roomRepository = new RoomRepository();
    }

    async createRoom(data){
        try {
            const room = await this.roomRepository.create(data);
            return room;
        } catch (error) {
            console.log("Error Occured in Room Service");
            throw error;
        }
    }
}

module.exports = RoomService;