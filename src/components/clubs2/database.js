const sqlite3 = require('sqlite3').verbose();

// Open the database
const db = new sqlite3.Database('allclubs.db');

// Create a table for reminders
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS allclubs (id VARCHAR PRIMARY KEY, name VARCHAR, description VARCHAR)");
});

module.exports = db;