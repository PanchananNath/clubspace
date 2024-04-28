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

interface RequestBody {
  id: string;
  download_url: string;
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { id, download_url }: RequestBody = req.body;
      const client = await pool.connect();
      // Execute the SQL INSERT query
      const insertResult = await client.query(
        `
              INSERT INTO files(id, download_url)
              VALUES($1, $2)
            `,
        [id, download_url]
      );

      const insert = insertResult.rows;

      client.release();

      res.status(200).json(insert);
    } catch (error) {
      console.error("Error retreving dta from PostgreSQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

// const downloadURL = 'https://example.com/download/file';

// pool.query('INSERT INTO files (download_url) VALUES ($1)', [downloadURL], (error, results) => {
//   if (error) {
//     console.error('Error inserting download URL:', error);
//   } else {
//     console.log('Download URL inserted into the database successfully.');
//   }
// });
