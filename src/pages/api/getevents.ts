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

export default async function getEvents(
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
    // if (req.method !== "POST") {
    //   return res.status(405).json({
    //     error: "Method Not Allowed",
    //     message: "This route only accepts GET requests",
    //   });
    // }
    const client = await pool.connect();
    // console.log("CONTENT OF CLIENT: ", client);

    const eventsdata = await client.query("SELECT * FROM events"); //eventsdata object contains the rows and fields of the events table returned from the query

    // console.log("CONTENT OF EVENTSDATA: ", eventsdata);

    const events = eventsdata.rows;
    // console.log("CONTENT OF EVENTS: ", events);

    client.release();

    res.status(200).json(events);
    // res.status(200).json({
    //   status: "success",
    //   message: "Events fetched successfully",
    //   body: eventsdata.rows,
    // });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
