const mongoose = require("mongoose");

// create scchema
//  schema is bluprint of what our data looks like in db

const BookingSchema = new mongoose.Schema({

    customerId: {
        type: String,
        required: true
    },
    roomId: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }


},
    {
        timestamps: true
    }

)

// mention the collection name as room to be created in db
const BookingModel = mongoose.model("booking", BookingSchema)

// export the roomModel
module.exports = BookingModel;