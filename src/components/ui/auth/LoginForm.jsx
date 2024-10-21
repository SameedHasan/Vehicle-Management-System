"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import styles from "./login.module.css";

const LoginForm = () => {
  const [error, setError] = useState(null); // State to store error messages

  const authenticate = async (formData) => {
    const { email, password } = Object.fromEntries(formData);

    // Reset the error state before trying to sign in
    setError(null);

    // Call the signIn function
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Do not automatically redirect on error
    });

    // Check if login failed
    if (result?.error) {
      setError("Wrong email or password!"); // Set a user-friendly error message
    } else {
      window.location.href = "/dashboard"; // Redirect to dashboard on success
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await authenticate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Login</h1>
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <button type="submit">Login</button>

      {/* Display the error message if login failed */}
      {error && <div className={styles.error}>{error}</div>}
    </form>
  );
};

export default LoginForm;
