//  write the business logic or function here and export the import in the routes


// once you witre the schema and connect mongoose client// import the model here 
const RoomsModel = require("../models/room.model")


async function RoomRoutes(req, res, next) {

    console.log("RoomRoutes route is on 🔥")

    //  use the modelinside routes to create in db completion
    const response = await RoomsModel.find();
    console.log(response)
    res.status(200).json({
        message: 'Room Routes page is successful, Jarvis 😎',
        data: response

    })
}


async function createARoom(req, res) {


    try {

        
        const room = new RoomsModel(req.body);
        await room.save();
        res.status(201).json({
            message:"the data has been saved successfully",
            Data: room
        });
    } catch (err) {
        res.status(401).json({ error: 'Could not create room' });
    }
}



// list all booking data
async function roomBooked (req, res) {
    try {

        
      const rooms = await RoomsModel.aggregate([
        {
          $lookup: {
            from: 'bookings',
            localField: '_id',
            foreignField: 'roomId',
            as: 'bookings',
          },
        },
      ]);
      console.log("List of rooms booked ", rooms)
      res.status(200).json({
        message: " Listed booked room successful",
        data: rooms
      });
    } catch (err) {
      res.status(500).json({ error: 'Could not fetch data' });
    }
  }
module.exports = {
    RoomRoutes,
    createARoom,
    roomBooked
}


