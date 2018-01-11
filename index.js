// @flow
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", routes);

// error handling middleware
app.use(function(err, req, res, next) {
    // console.log(err);
    res.status(422).send({
        error: err.message
    });
});

mongoose.connect("mongodb://localhost/socialNetwork", {useMongoClient: true});

mongoose.Promise = global.Promise;

mongoose.connection.on("open", function() {
    console.log("Connected to database \"socialNetwork\"");
});

const server = app.listen(3000, function() {
    console.log("Listening on port 3000...");
}); // app.listen ~ [NODE] http.createServer.listen

server.on('error', function(err) {
    console.log(err);
});