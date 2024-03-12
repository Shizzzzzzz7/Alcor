const express = require("express");
const bodyParser = require("body-parser");
const cors= require("cors");
const cookieParser= require("cookie-parser");
const dbConnect = require("./config/database");
const { apiRoomRoutes, apiBookingRoutes } = require("./routes/index");
const { PORT } = require("./config/serverConfig");


const app = express();

const createAndSetupServer = async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors({origin:"https://candid-crumble-7602da.netlify.app/", credentials:true}));
    app.use(cookieParser());
    app.use("/api", apiRoomRoutes);
    app.use("/api", apiBookingRoutes);

    app.listen(PORT, async()=>{
        console.log(`Server Started on PORT ${PORT}`);
        dbConnect();
        
    });
}

createAndSetupServer();