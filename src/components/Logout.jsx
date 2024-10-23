"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import styles from "@/components/ui/dashboard/sidebar/sidebar.module.css";
const Logout = () => {
  return (
    <button className={styles.logout} onClick={() => signOut()}>
      <MdLogout />
      Logout
    </button>
  );
};

export default Logout;
