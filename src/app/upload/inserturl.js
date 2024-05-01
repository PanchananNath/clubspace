const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'clubspace',
//   host: 'localhost',
//   database: 'clubspace',
//   password: 'root',
//   port: 5432, 
// });

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

const downloadURL = 'https://example.com/download/file';

pool.query('INSERT INTO files (download_url) VALUES ($1)', [downloadURL], (error, results) => {
  if (error) {
    console.error('Error inserting download URL:', error);
  } else {
    console.log('Download URL inserted into the database successfully.');
  }
});
