const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newSchema = new Schema({
    email: String,
    password: String,
    acctype: String,
});

module.exports = mongoose.model("User", newSchema);
