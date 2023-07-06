//to import express//
const express = require("express")
// const mongoose = require("mongoose")
const app = express()
// const { mongoClient } = require('mongodb');

app.use("/music", express.static("music"))
// app.use("/", express.static("anotherRoute"))



  
app.listen(5002, () => console.log("Server is Listening"))