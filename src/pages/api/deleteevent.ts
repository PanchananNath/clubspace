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
    if (req.method !== "DELETE") {
      return res.status(405).json({
        error: "Method Not Allowed",
        message: "This route only accepts GET requests",
      });
    }
    const id = req.query.id;
    const client = await pool.connect();
    try {
      const events_club_link = await client.query(
        `DELETE FROM events_club_link
        WHERE event_id=$1;`,
        [id]
      );
    } catch (err) {
      console.error("Error deleting from events_club_link:", err);
    }

    try {
      const _data = await client.query(
        `DELETE FROM events
        WHERE eventid=$1;`,
        [id] // Use parameterized query
      );
    } catch (err) {
      console.error("Error deleting from events:", err);
    }

    client.release();

    //send a json reqsonse to client
    res.status(200).json({ message: "Event Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
