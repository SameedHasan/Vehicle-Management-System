"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const Logout = ({ styles }) => {
  return (
    <button className={styles.logout} onClick={() => signOut()}>
      <MdLogout />
      Logout
    </button>
  );
};

export default Logout;
