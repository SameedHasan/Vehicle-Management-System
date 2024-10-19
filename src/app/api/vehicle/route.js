import { query } from "@/lib/db";

export async function GET(request) {
  try {
    const result = await query("SELECT * FROM users"); // Assuming `users` is the table name
    return new Response(JSON.stringify({ data: result.rows }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
