const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MOONGO_URL = "mongodb://127.0.0.1:27017/wander";


main().then(() =>{
    console.log("connected to DB.");
}).catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MOONGO_URL);
};

const initDB = async () =>{
    Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();
