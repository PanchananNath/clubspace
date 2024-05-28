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
    const { id } = req.query;
    const client = await pool.connect();

    // Execute the SQL INSERT query
    const DataResult = await client.query(
      `
      select id, firstname, lastname, email, photo from users where id='${id}';
      `
    );

    // const sturesult = await client.query(
    //   `select * from student_data`
    // )

    const Data = DataResult.rows;
    //const stu = sturesult.rows;

    client.release();

    res.status(200).json(Data);
  } catch (error) {
    console.error("Error retreving dta from PostgreSQL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
