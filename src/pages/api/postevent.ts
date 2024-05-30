import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

interface RequestBody {
  clubid: number;
  name: string;
  poster: string;
  venue: string;
  date_time: string;
  description: string;
  registration_url: string;
  qr_code: string;
  sponsorname: string;
  sponsor_url: string;
  sponsor_logo: string;
}

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
    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method Not Allowed",
        message: "This route only accepts GET requests",
      });
    }
    const client = await pool.connect();

    const {
      clubid,
      name,
      poster,
      venue,
      date_time,
      description,
      registration_url,
      qr_code,
      sponsorname,
      sponsor_url,
      sponsor_logo,
    } = req.body as RequestBody;

    const eventdata = await client.query(
      `INSERT INTO events(name, poster, venue, date_time, description, registration_url, qr_code)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING eventid`,
      [name, poster, venue, date_time, description, registration_url, qr_code]
    );

    const eventid = eventdata.rows[0].eventid; //get the id of the inserted event

    const event_club_link = await client.query(
      `INSERT INTO events_club_link(event_id, club_id)
        VALUES($1, $2)`,
      [eventid, clubid]
    );

    const event_sponsors = await client.query(
      `INSERT INTO events_sponsors(event_id, sponsorname, sponsor_url, sponsorlogo)
            VALUES($1, $2, $3, $4)`,
      [eventid, sponsorname, sponsor_url, sponsor_logo]
    );

    //send a json response to client
    res
      .status(200)
      .json({ message: "Event added successfully", data: eventdata });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
