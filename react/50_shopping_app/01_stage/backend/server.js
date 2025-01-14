const express = require("express");

const app = express();

app.use(express.json());

//DATABASE

let database = [];
let id = 100;

//API

//Get database, return in json form

app.get("/api/shopping",function(req,res) {
	return res.status(200).json(database);
})

/* Add new item to database. Item comes in JSON Form
{
	type:string,
	count:number,
	price:number
}

return status 201 Created and the new item
*/

app.post("/api/shopping",function(req,res) {
	let item = {
		id:id,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	id++;
	database.push(item);
	return res.status(201).json(item);
})

/* Remove item using id. Id will be a parameter in the url */

app.delete("/api/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	let tempDatabase = database.filter(item => item.id !== tempId);
	database = tempDatabase;
	return res.status(200).json({"Message":"Success"})
})

app.put("/api/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	for(let i=0;i<database.length;i++) {
		if(tempId === database[i].id) {
			database.splice(i,1,item);
			return res.status(200).json({"Message":"Success"})
		}
	}
	return res.status(404).json({"Message":"Not found"})
})

console.log("Running in port 3000");

app.listen(3000);