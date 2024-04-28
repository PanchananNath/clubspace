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

interface RequestBody{
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  institute_id: number;
  module: number;
  semester: number;
  department_id: number;
  linkedin: string;
  phone: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'POST') {
    try {
      const { id, firstname, lastname, email, institute_id, module, semester, department_id, linkedin, phone }: RequestBody = req.body;
      const client = await pool.connect();
      // Execute the SQL INSERT query
      const popUpFormResult = await client.query(
        `
          INSERT INTO users(id, firstname, lastname, email, institute_id, department_id, linkedin, phone)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        `,
        [
          id,
          firstname,
          lastname,
          email,
          institute_id,
          department_id,
          linkedin,
          phone,
        ]
      );
  
      const stuDataResult = await client.query(
        `INSERT INTO student_data (id, semester, module) VALUES($1, $2, $3)`,
        [id, semester, module]
      );
  
      const popUpForm = popUpFormResult.rows;
      const stuData = stuDataResult.rows;
  
      client.release();
  
      res.status(200).json({ popUpForm, stuData });
    } catch (error) {
      console.error("Error retreving dta from PostgreSQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
}
