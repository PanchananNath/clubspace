import { Pool } from "pg";
import { NextApiRequest, NextApiResponse } from "next";

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Connect to the database
    const client = await pool.connect();

    // Execute the SQL SELECT query to fetch required data
    const _data = await client.query(`SELECT id, name from modules`);

    const data = _data.rows;

    // Release the connection back to the pool
    client.release();

    // Return the data in JSON format
    res.status(200).json(data);
  } catch (error) {
    console.error("Error retrieving data from PostgreSQL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
