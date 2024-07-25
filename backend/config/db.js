const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI ="mongodb+srv://vedantavhad98:KEx7JbWHwUWEePFh@cluster0.psuxk4b.mongodb.net/my-mern-app?retryWrites=true&w=majority&appName=Cluster0";
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.log(error);
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;