const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://rahulgupta630738:WzJlrDgcxxiWR4yL@cluster0.tnx48hl.mongodb.net/FlameCloud-Assignment"

mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Server is Successfully Connected to MONGO DB Database");
})

db.on("error", (err) => {
    console.log("Error: " + err);
})

module.exports = mongoose;