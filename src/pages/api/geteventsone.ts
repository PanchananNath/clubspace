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

    const client = await pool.connect();
    console.log("CONTENT OF CLIENT: ", client);

    const _data = await client.query(
      `SELECT e.eventid, e.name, e.poster, e.venue, e.date_time, e.description, e.registration_url, e.qr_code, c.name as clubname, c.poster as clublogo
      FROM events as e
      left join events_club_link as ec on ec.event_id=e.eventid
      left join clubs as c on c.id=ec.club_id;`
    );

    const data = _data.rows;

    client.release();

    //send a json reqsonse to client
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
