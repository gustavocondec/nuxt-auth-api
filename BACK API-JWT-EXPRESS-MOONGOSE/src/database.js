const mongoose = require("mongoose")


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
var db = mongoose.connection;
db.on("error", console.error.bind(console, "error al conectar bd"));
db.once("open", function () {
    console.log("bd conectada")
})