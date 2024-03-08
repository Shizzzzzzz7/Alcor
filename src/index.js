const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/database");
const { apiRoomRoutes } = require("./routes/index");

const app = express();

const createAndSetupServer = async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use("/api", apiRoomRoutes);

    app.listen(3000, async()=>{
        console.log(`Server Started on PORT 3000`);
        dbConnect();
    });
}

createAndSetupServer();