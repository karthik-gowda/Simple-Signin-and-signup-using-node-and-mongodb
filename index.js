const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://***:***@cluster0.lxu0r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", require("./routes/user.route"));

app.listen(port, () => {
    console.log("listening on " + port);
});
