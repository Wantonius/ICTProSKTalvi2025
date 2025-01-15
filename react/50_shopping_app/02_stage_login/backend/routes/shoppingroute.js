const express = require("express");

const router = express.Router();

//DATABASE

let database = [];
let id = 100;

//API

//Get database, return in json form

router.get("/shopping",function(req,res) {
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

router.post("/shopping",function(req,res) {
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

router.delete("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	let tempDatabase = database.filter(item => item.id !== tempId);
	database = tempDatabase;
	return res.status(200).json({"Message":"Success"})
})

//Update item using id. We use Array.prototype.splice to change the existing item to new one.

router.put("/shopping/:id",function(req,res) {
	let tempId = parseInt(req.params.id);
	let item = {
		id:tempId,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	for(let i=0;i<database.length;i++) {
		if(tempId === database[i].id) {
			database.splice(i,1,item);
			return res.status(200).json({"Message":"Success"})
		}
	}
	return res.status(404).json({"Message":"Not found"})
})

module.exports = router;