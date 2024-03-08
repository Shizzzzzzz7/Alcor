const {Room} = require("../models/index");

class RoomRepository{

    async create(data){
        try {
            const result = await Room.create(data);
            return result;
        } catch (error) {
            console.log("Error Occured in Room Repository");
            throw error;
        }
    }
}

module.exports = RoomRepository;