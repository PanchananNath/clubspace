// import { NextRequest, NextResponse } from 'next/server';
// import { Client } from 'pg';

// export default async function handler(request: NextRequest, response: NextResponse) {
//     if (request.method === 'POST') {
//         // connect to PostgreSQL
//         const client = new Client({
//             connectionString: process.env.DATABASE_URL,
//             ssl: {
//                 rejectUnauthorized: false
//             }
//         });

//         try {
//             await client.connect();

//             // FETCH DATA FROM DATABASE
//             const result = await client.query(`INSERT INTO users(id, firstname, lastname, email, institute, module, semester, dept, linkdin, phone ) values()`);
//             return Response.json({ success: true, data: result.rows }, { status: 200});
//         } catch (error) {
//             console.error('Error fetching data: ', error);
//             return Response.json({ success: false, message: 'Error fetching data'}, { status: 500});
//         } finally {
//             await client.end();
//         }
//     } else {
//         return Response.json({ success: false, message: 'Method not allowed'}, { status: 405 });
//     }
// }


import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { uid, firstname, lastname, email, institute, module, semester, dept, linkdin, phone } = req.body;

      // Validate the incoming data if needed

      // Execute the SQL INSERT query
      const result = await pool.query(`
        INSERT INTO users(id, firstname, lastname, email, institute, module, semester, dept, linkdin, phone)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `, [uid, firstname, lastname, email, institute, module, semester, dept, linkdin, phone]);

      res.status(200).json({ success: true, data: result.rows });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
