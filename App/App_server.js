const express = require ( "express");

const RoomRouter = require("../router/room.routes")

const BookingRouter = require("../router/booking.routes")

const App_server = express ();

App_server.use ("/room", RoomRouter)
App_server.use ("/booking", BookingRouter)


module.exports =App_server;

// http:localhost:8000/app/room