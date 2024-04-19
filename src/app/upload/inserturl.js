const { Pool } = require('pg');

const pool = new Pool({
  user: 'clubspace',
  host: 'localhost',
  database: 'clubspace',
  password: 'root',
  port: 5432, // Default PostgreSQL port
});

const downloadURL = 'https://example.com/download/file';

pool.query('INSERT INTO files (download_url) VALUES ($1)', [downloadURL], (error, results) => {
  if (error) {
    console.error('Error inserting download URL:', error);
  } else {
    console.log('Download URL inserted into the database successfully.');
  }
});
