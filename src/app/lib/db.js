// lib/db.js
import { Pool } from "pg";

const conn = new Pool({
  user: process.env.POSTGRES_USER, // Your PostgreSQL username
  password: process.env.POSTGRES_PASSWORD, // Your PostgreSQL password
  host: process.env.POSTGRES_HOST, // Your PostgreSQL host
  database: process.env.POSTGRES_DATABASE, // Your PostgreSQL database name
  port: 5432, // Y
  ssl: {
    rejectUnauthorized: false, // Set to false to allow self-signed certificates (use with caution)
    // Other SSL options if needed
  },
});

export default conn;
