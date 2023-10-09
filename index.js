const express = require ( "express")
const BODY_PARSER = require("body-parser");
const App_server = require ("./App/App_server")
const  configDotenv  = require("dotenv");

//  load .env variables into process.env
configDotenv.config()

const HTTP_SERVER = express();
const PORT = 8000;

const {init} = require ("./dbconfig");

init();

// commanding the server  to aware of incoming req type
// parser the request as application / json
HTTP_SERVER.use(BODY_PARSER.json());

// parser therequest as application/x-www-form-urlencoded
HTTP_SERVER.use(BODY_PARSER.urlencoded({extended: true}));


HTTP_SERVER.listen( PORT, ()=>{
    console.log (`Http_server listening to ${PORT}`)
})


//  CREATING HTTP ROUTE FOR TASK-1 HALL BOOKING API

HTTP_SERVER.get ("/", (req, res) => {
    console.log ( "HTTP route is ON ")
    return res.status(200).json({
        message : `Welcome To Hall Booking Api port ${PORT}`
    })
}

)

// injecting app_server in HTTP SERVER

HTTP_SERVER.use("/app", App_server)

// http:localhost:8000/app/