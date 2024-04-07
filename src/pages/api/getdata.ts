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

    // Execute the SQL INSERT query
    const usersResult = await client.query(
      `
        select * from users
      `
    );

    const sturesult = await client.query(
      `select * from student_data`
    )

    const users = usersResult.rows;
    const stu = sturesult.rows;

    client.release();

    res.status(200).json({ users, stu });
  } catch (error) {
    console.error("Error retreving dta from PostgreSQL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
