import pg from "pg";
const { Pool } = pg;

const db = new Pool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: "db_avatar",
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
});

db.connect((err, res) => {
	if (err) {
		console.error("Error connecting to the database:", err.stack);
	} else {
		console.log("Connected to the PostgreSQL database.");
	}
});

export default db;
