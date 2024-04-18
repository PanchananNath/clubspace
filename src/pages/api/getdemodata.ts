import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

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

export default async function getDemoData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({
        error: "Method Not Allowed",
        message: "This route only accepts GET requests",
      });
    }

    const client = await pool.connect();

    const demodata = await client.query("SELECT * FROM demo ORDER BY id ASC");

    const demo = demodata.rows;

    client.release();

    res.status(200).json(demo);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
