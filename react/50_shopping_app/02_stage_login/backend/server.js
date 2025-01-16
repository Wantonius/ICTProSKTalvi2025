const express = require("express");
const shoppingroute = require("./routes/shoppingroute");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = require("./models/user");
const sessionModel = require("./models/session");
const crypto = require("crypto");

const app = express();

app.use(express.json());

//MONGODB CONNECTION

const mongo_url = process.env.MONGODB_URL;
const mongo_user = process.env.MONGODB_USER;
const mongo_password = process.env.MONGODB_PASSWORD;

const url = "mongodb+srv://"+mongo_user+":"+mongo_password+"@"+mongo_url+"/satakuntashopping?retryWrites=true&w=majority&appName=testiklusteri"

mongoose.connect(url).then(
() => console.log("Connected to Mongodb"),
(err) => console.log("Failed to connect to Mongodb. Reason:",err)
);

mongoose.set("toJSON",{virtuals:true});

//MIDDLEWARES AND HELPERS

const time_to_live_diff = 3600000;

createToken = () => {
	let token = crypto.randomBytes(64);
	return token.toString("hex");
}

//Middleware to authorize and personalize requests for CRUD under /api. We check for the
//existence of authentication token that the user gets from login. If the token exists
//and is valid (alive) request is personalized for that specific user and passed on to
//shoppingroute. Otherwise 403 forbidden is returned.

isUserLogged = (req,res,next) => {
	if(!req.headers.token) {
		return res.status(403).json({"Message":"Forbidden"});
	}
	sessionModel.findOne({"token":req.headers.token}).then(function(session) {
		if(!session) {
			return res.status(403).json({"Message":"Forbidden"});
		}
		let now = Date.now();
		if(now > session.ttl) {
			sessionModel.deleteOne({"_id":session._id}).then(function(){
				return res.status(403).json({"Message":"Forbidden"});
			}).catch(function(err) {
				console.log("Failed to delete session. Reason:",err);
				return res.status(403).json({"Message":"Forbidden"});
			})
		} else {
			session.ttl = now + time_to_live_diff;
			req.session = {};
			req.session.user = session.user;
			session.save().then(function() {
				return next();
			}).catch(function(err) {
				console.log("Failed to resave session. Reason",err);
				return next();
			})
		}
	}).catch(function(err) {
		console.log("Failed to find session. Reason:",err);
		return res.status(403).json({"Message":"Forbidden"});
	})
}

//LOGIN API

app.post("/register",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad Request"});
	}
	if(!req.body.username || !req.body.password) {
		return res.status(400).json({"Message":"Bad Request"});
	}
	if(req.body.username.length < 4 && req.body.password.length < 8) {
		return res.status(400).json({"Message":"Bad Request"});
	}
	bcrypt.hash(req.body.password,14,function(err,hash) {
		if(err) {
			return res.status(500).json({"Message":"Internal server error"})
		}
		let user = new userModel({
			username:req.body.username,
			password:hash
		})
		user.save().then(function() {
			return res.status(200).json({"Message":"Register Success"})
		}).catch(function(err) {
			if(err.code === 11000) {
				return res.status(409).json({"Message":"Username already in use"})
			}
			return res.status(500).json({"Message":"Internal server error"})
		})
	})
})

app.post("/login",function(req,res) {
	if(!req.body) {
		return res.status(400).json({"Message":"Bad Request"});
	}
	if(!req.body.username || !req.body.password) {
		return res.status(400).json({"Message":"Bad Request"});
	}
	if(req.body.username.length < 4 && req.body.password.length < 8) {
		return res.status(400).json({"Message":"Bad Request"});
	}
	userModel.findOne({"username":req.body.username}).then(function(user) {
		if(!user) {
			return res.status(401).json({"Message":"Unauthorized"});
		}
		bcrypt.compare(req.body.password,user.password,function(err,success) {
			if(err) {
				console.log("Failed to compare passwords. Reason:",err);
				return res.status(500).json({"Message":"Internal Server Error"})
			}
			if(!success) {
				return res.status(401).json({"Message":"Unauthorized"});
			}
			let token = createToken();
			let now = Date.now();
			let session = new sessionModel({
				user:req.body.username,
				token:token,
				ttl:now+time_to_live_diff
			})
			session.save().then(function() {
				return res.status(200).json({"token":token})
			}).catch(function(err) {
				console.log("Failed to save session. Reason:",err);
				return res.status(500).json({"Message":"Internal Server Error"})
			})
		})
	}).catch(function(err){
		console.log("Failed to find user. Reason:",err);
		return res.status(500).json({"Message":"Internal Server Error"});
	})
})

//isUserLogged is used here!!

app.use("/api",isUserLogged,shoppingroute);

console.log("Running in port 3000");

app.listen(3000);