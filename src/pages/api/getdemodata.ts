import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";


// Create a PostgreSQL connection pool

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


// Define the API route handler to get an event along with its attendees' names and photos
export default async function getEventWithAttendees(

  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // if (req.method !== "POST") {
    //   return res.status(405).json({ message: "Method Not Allowed" });
    // }


    // Get a client from the connection pool
    const client = await pool.connect();

    // Get the event details
    const eventResult = await client.query(
      `SELECT * FROM demo `
    );
    const event = eventResult.rows;

    client.release();

    res.status(200).json(event);
  } catch (error) {
    console.error("Error retrieving data from PostgreSQL:", error);
    res.status(500).json({ error: "Internal Server Error" });

  }
}
