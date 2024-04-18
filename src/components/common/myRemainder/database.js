const sqlite3 = require('sqlite3').verbose();

// Open the database
const db = new sqlite3.Database('reminders.db');

// Create a table for reminders
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY, title TEXT, datetime TEXT)");
});

module.exports = db;
f