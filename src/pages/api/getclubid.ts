import { user } from "@nextui-org/theme";
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
    console.log("CONTENT OF CLIENT: ", client);

    const _data = await client.query(
      `SELECT club_id
      FROM user_club_link
      where user_id=$1;`,
      [id] // Use parameterized query
    );
    client.release();
    const data = _data.rows;
    //send a json reqsonse to client
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
