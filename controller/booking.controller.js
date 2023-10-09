//  write the business logic or function here and export the import in the routes

// once you witre the schema and connect mongoose client// import the model here 
const BookingModel = require("../models/booking.model")


async function BookingRoutes(req, res) {

  console.log("BookingRoutes route is on 🔥")

  try {

    // use the modelinside routes to create in db completion
    // const response = await BookingModel.find();
    const response = await BookingModel.aggregate([
      {
        $lookup: {
          from: 'bookings',
          localField: '_id',
          foreignField: 'roomId',
          as: 'bookings',
        },
      },
    ]);
    console.log(response)
    res.status(200).json({
      message: 'Booking Routes page is welcomes, Jarvis 😎',
      data: response

    })

  } catch (error) {

    res.status(500).json({ error: 'Could not fetch data' });

  }



}



async function BookARoom(req, res) {


  try {

      const booking = new BookingModel(req.body);
      await booking.save();
      res.status(201).json({
          message:"the booking data has been saved successfully",
          Data: booking
      });
  } catch (err) {
      res.status(401).json({
        error: err.message,
      });
  }
}

module.exports = {
  BookingRoutes,
  BookARoom
}


