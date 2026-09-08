import { Database } from "bun:sqlite";

const dbPath = process.env.SQLITE_DB_PATH || "./data/scolarite.sqlite";
const db = new Database(dbPath);

export default db;