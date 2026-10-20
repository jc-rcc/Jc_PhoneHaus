export function migrationConnection(env) {
  const ref = env.SUPABASE_PROJECT_REF;
  const host = env.SUPABASE_DB_HOST;
  const password = env.SUPABASE_DB_PASSWORD;
  if (!/^[a-z]{20}$/.test(ref || "")) throw new Error("Invalid Supabase project reference");
  if (!/^[a-z0-9-]+\.pooler\.supabase\.com$/.test(host || "")) throw new Error("Invalid Session pooler hostname");
  if (!password) throw new Error("Missing SUPABASE_DB_PASSWORD");
  return `postgresql://postgres.${ref}:${encodeURIComponent(password)}@${host}:5432/postgres?sslmode=require`;
}
