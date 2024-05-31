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

    // First, find the club_id associated with the user_id
    const clubIdResult = await client.query(
      `SELECT club_id
      FROM user_club_link
      WHERE user_id=$1;`,
      [id] // Use parameterized query
    );

    // Extract the club_id from the result
    const club_id = clubIdResult.rows[0].club_id;

    // Then, count the total number of users associated with the club_id
    const totalUsersResult = await client.query(
      `SELECT COUNT(user_id) as total_users
      FROM user_club_link
      WHERE club_id=$1
      GROUP BY club_id;`,
      [club_id] // Use parameterized query
    );

    // Extract the total_users from the result
    const total_users = totalUsersResult.rows[0].total_users;

    client.release();

    // Send a json response to client
    res.status(200).json({ club_id, total_users });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error", err });
  }
}
