import type { ContactPayload } from "./validate";

/**
 * SQL INJECTION PREVENTION
 * ------------------------
 * This project ships without a bundled database so it runs anywhere, but
 * this file shows the required pattern: every query uses parameter
 * placeholders ($1, $2, ...) and passes user values in a separate array.
 * The driver (node-postgres / any parameterized driver) sends the query
 * and the values separately to the database — user input can never be
 * interpreted as SQL syntax, no matter what characters it contains.
 *
 * NEVER build queries like:
 *   `INSERT INTO messages (name) VALUES ('${name}')`   // ✗ vulnerable
 * ALWAYS do:
 *   query(`INSERT INTO messages (name) VALUES ($1)`, [name])   // ✓ safe
 *
 * If you introduce an ORM (Prisma, Drizzle, Knex, TypeORM) instead, use its
 * query builder / parameter binding — never its raw-SQL escape hatch with
 * string interpolation.
 */

// Example wiring for node-postgres. Uncomment and set DATABASE_URL to use:
//
// import { Pool } from "pg";
// const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: IS_PROD });
//
// export async function saveContactMessage(payload: ContactPayload): Promise<void> {
//   await pool.query(
//     `INSERT INTO contact_messages (name, email, subject, message, created_at)
//      VALUES ($1, $2, $3, $4, NOW())`,
//     [payload.name, payload.email, payload.subject, payload.message] // parameterized — never concatenated
//   );
// }

export async function saveContactMessage(payload: ContactPayload): Promise<void> {
  // Placeholder no-op persistence until a real database is wired up.
  // Replace with the pg (or ORM) implementation above.
  console.log("[contact] received message from", payload.email);
}
