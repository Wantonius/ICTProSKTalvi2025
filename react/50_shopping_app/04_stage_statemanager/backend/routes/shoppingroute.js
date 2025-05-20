const express = require("express");
const itemModel = require("../models/item");
const router = express.Router();


//API

//Get database, return in json form

router.get("/shopping",function(req,res) {
	let query = {"user":req.session.user}
	itemModel.find(query).then(function(items){
		return res.status(200).json(items);
	}).catch(function(err) {
		console.log("Failed to find items for user "+req.session.user+". Reason",err);
		return res.status(500).json({"Message":"Internal Server Error"});
	})
})

/* Add new item to database. Item comes in JSON Form
{
	user:string,
	type:string,
	count:number,
	price:number
}

return status 201 Created and the new item
*/

router.post("/shopping",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad request"})
	}
	if(!req.body.type) {
		return res.status(400).json({"Message":"Bad request"})
	}
	let item = new itemModel({
		user:req.session.user,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	})
	item.save().then(function() {
		return res.status(201).json({"Message":"Created"})
	}).catch(function(err) {
		console.log("Failed to create new item. Reason",err);
		return res.status(500).json({"Message":"Internal server error"})
	});
})

/* Remove item using _id. Id will be a parameter in the url */

router.delete("/shopping/:id",function(req,res) {
	itemModel.deleteOne({"_id":req.params.id,"user":req.session.user}).then(function() {
		return res.status(200).json({"Message":"Success"})
	}).catch(function(err) {
		return res.status(500).json({"Message":"Internal server error"})
	})
})

//Update item using _id. We use mongooses Model.replaceOne to replace current with new.

router.put("/shopping/:id",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad request"})
	}
	if(!req.body.type) {
		return res.status(400).json({"Message":"Bad request"})
	}
	let item = {
		user:req.session.user,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	itemModel.replaceOne({"_id":req.params.id,"user":req.session.user},item).then(function() {
		return res.status(200).json({"Message":"Success"})
	}).catch(function(err) {
		console.log("Failed to edit item _id "+req.params.id+". Reason",err);
		return res.status(500).json({"Message":"Internal server error"})
	})
})

module.exports = router;