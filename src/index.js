const express = require("express");
const bodyParser = require("body-parser");
const cors= require("cors");
const cookieParser= require("cookie-parser");
const dbConnect = require("./config/database");
const { apiRoomRoutes, apiBookingRoutes } = require("./routes/index");
const mailer = require("./utils/mailer");

const app = express();

const createAndSetupServer = async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors({origin:"http://localhost:3000", credentials:true}));
    app.use(cookieParser());
    app.use("/api", apiRoomRoutes);
    app.use("/api", apiBookingRoutes);

    app.listen(3000, async()=>{
        console.log(`Server Started on PORT 3000`);
        dbConnect();
    });
}

createAndSetupServer();