// MERN = Mongo + Express + React + Node

const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello world ");
});

app.listen(1337, () => {
    console.log("listening on port 1337");
});