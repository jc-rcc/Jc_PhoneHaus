import assert from "node:assert/strict";

const base = new URL(process.env.VITE_SUPABASE_URL);
const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
assert.equal(base.protocol, "https:");
assert.ok(key, "Missing public Supabase key");

async function get(path) {
  const response = await fetch(new URL(path, base), {
    headers: { apikey: key, Accept: "application/json" },
    signal: AbortSignal.timeout(20000),
  });
  assert.ok(
    response.ok,
    `Supabase check failed for ${path}: HTTP ${response.status}`,
  );
  return response.json();
}

const auth = await get("/auth/v1/settings");
assert.equal(
  auth.external?.email,
  true,
  "Supabase email authentication is not enabled",
);
for (const table of ["profiles", "orders", "order_items"]) {
  const rows = await get(`/rest/v1/${table}?select=id&limit=1`);
  assert.ok(
    Array.isArray(rows) && rows.length === 0,
    `Anonymous reads must not expose ${table}`,
  );
}
console.log(
  "Supabase authentication endpoint, migrated tables, and anonymous read restrictions verified.",
);
