import pg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const { Pool } = pg;

// Create a new Pool instance
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false } // Optional, needed if you're connecting to a cloud-hosted Postgres with SSL
});

async function connectDB() {
  try {
    // Connect to the database
    const client = await pool.connect();

    return client; // Return the client for use in other files
  } catch (err) {
    console.error('Error connecting to PostgreSQL database:', err);
    throw err;
  }
}

export default connectDB  // Export the function