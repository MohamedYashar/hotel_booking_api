const mongoose = require("mongoose");

async function init() {

    try {
        // connected to mongodb
        await mongoose.connect("mongodb://localhost:27017/hotelbooking")
        console.log("connected to db")
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = {
    init,
}