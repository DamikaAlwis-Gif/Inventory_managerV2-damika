import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "damika",
  database: "inventory",
});

export default db;
