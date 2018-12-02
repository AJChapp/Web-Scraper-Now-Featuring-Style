const express = require("express");
const mongoose = require("mongoose");
const routes = require('./Routes/routes.js')
const path = require('path');
const PORT = process.env.PORT || 8000;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('client/public')); 
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/scrapingHW'
mongoose.connect(mongoURI);

routes(app);
app.use(express.static(path.join(__dirname, 'Client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./Client/build/index.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
