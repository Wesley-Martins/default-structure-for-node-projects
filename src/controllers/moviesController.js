const moviesModel = require("../models/moviesModel.js");

async function getRatingsByUser(req, res) {
    const userEmail = req.body.userEmail;

    const result = await moviesModel.getRatingsByUser(userEmail);

    res.status(200);
    res.json(result);
}

module.exports = {
    getRatingsByUser
}
