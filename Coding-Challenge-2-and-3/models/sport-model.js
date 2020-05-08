const mongoose = require("mongoose");
const uuid = require("uuid");

/* Your code goes here */

const schema = mongoose.Schema({
	id: {
		type: String,
		default: uuid.v4,
	},
	name: {
		type: String,
	},
	num_players: {
		type: Number,
	},
});

const model = mongoose.model("sports", schema);

module.exports = model;
