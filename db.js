const mongoose = require("mongoose");






mongoose.connect("mongodb://localhost:27017/virtualDB");




module.exports = mongoose;     