// /app/api/users/route.js

import { query } from "@/lib/db";

// Helper function to build query for pagination and sorting
function buildQuery({ page, pageSize, sortField, sortOrder }) {
  let baseQuery = "SELECT * FROM users";

  // Add sorting
  if (sortField && sortOrder) {
    baseQuery += ` ORDER BY ${sortField} ${sortOrder === "ascend" ? "ASC" : "DESC"}`;
  }

  // Add pagination
  const offset = (page - 1) * pageSize;
  baseQuery += ` LIMIT ${pageSize} OFFSET ${offset}`;

  return baseQuery;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const pageSize = parseInt(searchParams.get("pageSize")) || 10;
  const sortField = searchParams.get("sortField") || null;
  const sortOrder = searchParams.get("sortOrder") || null;

  try {
    // Fetch paginated and sorted users
    const result = await query(buildQuery({ page, pageSize, sortField, sortOrder }));

    // Get total count of users
    const countResult = await query("SELECT COUNT(*) FROM users");
    const total = parseInt(countResult.rows[0].count);

    return new Response(JSON.stringify({ data: result.rows, total }), {
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
