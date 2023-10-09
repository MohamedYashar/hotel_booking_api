const mongoose = require("mongoose");

// create scchema
//  schema is bluprint of what our data looks like in db

const RoomSchema = new mongoose.Schema({

    roomNumber: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    },
    amenities: {
        type: String,
        required: false
    },
    pricePerHour: {
        type: Number,
        required: true
    }

},
    {
        timestamps: true
    }

)

// mention the collection name as room to be created in db
const RoomsModel = mongoose.model("room", RoomSchema)

// export the roomModel
module.exports = RoomsModel;