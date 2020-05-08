const SportModel = require("../models/sport-model");

exports.delete = async (req, res) => {
	const { id } = req.body;
	const { sportId } = req.query;

	if (!id) {
		res.statusMessage =
			"Missing 'id' field on request. Please provide an 'id' to delete";
		return res.status(406).end();
	}

	if (!sportId) {
		res.statusMessage =
			"Missing 'sportId' field on request query. Please provide a 'sportId' to delete";
		return res.status(406).end();
	}

	if (id != sportId) {
		res.statusMessage =
			"The passed 'id' and 'sportId' values do not match. Please provide valid fields to delete.";
		return res.status(409).end();
	}

	if ((await SportModel.findOne({ id })) === null) {
		res.statusMessage =
			"The 'id' passed does not correspond to any known sport";
		return res.status(404).end();
	}

	try {
		await SportModel.deleteOne({ id });
	} catch (_) {
		res.statusMessage = "Error ocurred on the server. Please try again later.";
		return res.status(500).end();
	}

	res.status(204).end();
};
