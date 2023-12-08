const db = require("./connection.js");

async function getRatingsByUser(userEmail) {
    const query = `SELECT * FROM ratings WHERE user_email = ?`;

    const result = await new Promise((resolve, reject) => {
        db.get(query, [userEmail], (err, rows) => {
            if(err) { 
                return reject(err) 
            }

           resolve(rows);
        })
    });

    return result;
}

module.exports = {
    getRatingsByUser
}