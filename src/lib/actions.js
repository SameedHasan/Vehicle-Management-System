"use server";
import { revalidatePath } from "next/cache";
import { query } from "./db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";
// import { signIn } from "@/auth";
// import { signIn } from "next-auth/react";

export const fetchUsers = async () => {
  try {
    const result = await query("SELECT * FROM users"); // Assuming `users` is the table name
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const AddUser = async (formData) => {
  const { name, email, password } = Object.fromEntries(formData);

  // Ensure you validate inputs (e.g., not empty, valid email, etc.)
  if (!name || !email || !password) {
    throw new Error("All fields (name, email, password) are required!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    // Use parameterized query to prevent SQL injection
    const result = await query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [name, email, hashedPassword] // Pass values as parameters to avoid SQL injection
    );
  } catch (err) {
    console.error("Failed to add user:", err.message);
    throw new Error("Failed to add user!");
  }
  revalidatePath("/dashboard/vehicles");
  redirect("/dashboard/vehicles");
};

export const deleteUser = async (id) => {
  // const { id } = Object.fromEntries(formData);

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
  revalidatePath("/dashboard/vehicles");
};

export const authenticate = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", {
      email: "sameedh41@gmail.com",
      password: "sameed",
      redirect: true,
    });
    // redirect("/dashboard");
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};
