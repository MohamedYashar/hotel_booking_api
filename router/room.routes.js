const express = require ( "express");

const {RoomRoutes, createARoom, roomBooked} = require ("../controller/room.controller")

const RoomRouter = express.Router();

RoomRouter.get ("/", RoomRoutes)


// 1. Create a room
RoomRouter.post('/create', createARoom )

// 3. List all rooms with booked data
RoomRouter.get('/booked',roomBooked );


module.exports =RoomRouter;