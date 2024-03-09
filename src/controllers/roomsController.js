const {RoomService} = require("../services/index");

const roomService = new RoomService();

const createRoom = async(req, res)=>{
    try {
        const response = await roomService.createRoom(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Room Added Successfully",
            err:{}
        });
    } catch (error) {
        console.log("Error in Room Controller");
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to add Room",
            err:{error}
        });
    }
}


module.exports = {
    createRoom
}