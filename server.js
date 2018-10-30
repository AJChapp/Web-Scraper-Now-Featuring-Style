const express = require("express");
const mongoose = require("mongoose");
const routes = require('./Routes/routes.js')

const PORT = 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('client/public')); 

mongoose.connect("mongodb://localhost/scrapingHW");

routes(app);

module.exports = {
    PORT
}
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
