const express = require ( "express");

const {BookingRoutes, BookARoom} = require ("../controller/booking.controller")

const BookingRouter = express.Router();




BookingRouter.get ("/", BookingRoutes)


// 2. Book a room
BookingRouter.post('/create', BookARoom);


module.exports =BookingRouter;

// http:// localhost:8000/api/booking/customers/booked