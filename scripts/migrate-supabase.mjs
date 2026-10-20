import { spawnSync } from "node:child_process";
import { migrationConnection } from "./migration-connection.mjs";

// Construct the credential-bearing URI only in memory, without a shell or file.
const connection = migrationConnection(process.env);
const password = process.env.SUPABASE_DB_PASSWORD;
const result = spawnSync("npx", [
  "--yes", "supabase@2.121.0", "db", "push", "--db-url", connection, "--yes",
], { env: process.env, encoding: "utf8", maxBuffer: 8 * 1024 * 1024 });
function redact(value = "") {
  return value.replaceAll(connection, "[database connection]")
    .replaceAll(encodeURIComponent(password), "[redacted]")
    .replaceAll(password, "[redacted]");
}
if (result.stdout) process.stdout.write(redact(result.stdout));
if (result.stderr) process.stderr.write(redact(result.stderr));
if (result.error) console.error("Could not start the Supabase migration command.");
process.exit(result.status ?? 1);
