import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

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
    const client = await pool.connect();

    // Execute the SQL SELECT query to fetch required data
    const clubsResult = await client.query(
      `
      SELECT * from events;
      `
    );

    const clubs = clubsResult.rows;

    client.release();

    res.status(200).json(clubs);
  } catch (error) {
    console.error("Error retrieving data from PostgreSQL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
