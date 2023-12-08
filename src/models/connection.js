const sqlite = require("sqlite3");

const db = new sqlite.Database("src/models/movies.db");
const query = `CREATE TABLE IF NOT EXISTS ratings(
    user_email VARCHAR(100),
    rating NUMBER,
    movie_id INTEGER
)`

db.run(query, (err) => {
    if(err) throw err;
})

module.exports = db;
