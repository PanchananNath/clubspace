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

export default async function getEventsOne(
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
    const id = req.query.id;
    const client = await pool.connect();

    const _data = await client.query(
      `SELECT e.name, e.poster, e.venue, e.date_time, e.description, e.registration_url, e.qr_code, es.sponsorname, es.sponsor_url, es.sponsor_logo
      FROM events as e
      LEFT JOIN event_sponsors as es ON e.eventid = es.eventid
      WHERE e.eventid = $1;
      `,
      [id] // Use parameterized query
    );

    const data = _data.rows;
    //send a json reqsonse to client
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
