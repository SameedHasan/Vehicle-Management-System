"use server";
import { revalidatePath } from "next/cache";
import { query } from "./db";

export const fetchUsers = async () => {
  try {
    const result = await query("SELECT * FROM users"); // Assuming `users` is the table name
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const AddUser = async () => {
  try {
    const result = await query("INSERT INTO users (name, email, password) VALUES ('Faisal', 'faisal@example.com', 'password123')");
    console.log("result", result);
    revalidatePath("/dashboard/vehicles");
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add user!");
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    const result = await query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount > 0) {
      console.log("User deleted:", result.rows[0]); // Display deleted user data
    } else {
      console.log("User not found");
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};
