const express = require("express");

const app = express();

app.use(express.json());

//DATABASE

let database = [];
let id = 100;

//API

app.get("/api/shopping",function(req,res) {
	return res.status(200).json(database);
})

console.log("Running in port 3000");

app.listen(3000);