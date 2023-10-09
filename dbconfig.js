const mongoose = require("mongoose");

async function init() {

    try {
        
         // connected to mongodb
        //  await mongoose.connect("mongodb://localhost:27017/hotelbooking")
        
        let URI= `mongodb+srv://${process.env.MongoDB_username}:${ process.env.MongoDB_password}@cluster0.iffbd.mongodb.net/${process.env.DB_name}`
        await mongoose.connect(URI)
        console.log("connected to db")
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = {
    init,
}

// mongodb+srv://mosh:DptvYmeCYLEqj9QJ@cluster0.iffbd.mongodb.net/

