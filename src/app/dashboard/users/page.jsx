import React, { Suspense } from "react";
import styles from "@/components/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Search from "@/components/ui/dashboard/search/Search";
import ReactTable from "@/components/ui/dashboard/table";
import { Spin } from "antd";

export default async function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";

  return (
    <Suspense fallback={<Spin size="large" />}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a user..." />
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New User</button>
          </Link>
          {/* <AddButton addVehicle={AddUser} /> */}
        </div>

        <ReactTable searchTerm={q} />
      </div>
    </Suspense>
  );
}
