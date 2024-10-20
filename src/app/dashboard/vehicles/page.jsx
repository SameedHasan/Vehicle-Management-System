import React from "react";
import styles from "@/components/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Search from "@/components/ui/dashboard/search/Search";
import Pagination from "@/components/ui/dashboard/pagination/Pagination";
// import ReactTable from "@/components/ui/dashboard/table";

const Vehicles = () => {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      createdAt: "2023-01-15",
      role: "Admin",
      status: "done",
      action: "edit",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      createdAt: "2023-02-20",
      role: "User",
      status: "pending",
      action: "delete",
    },
    {
      name: "Robert Brown",
      email: "robert.brown@example.com",
      createdAt: "2022-12-05",
      role: "Manager",
      status: "cancelled",
      action: "edit",
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      createdAt: "2023-03-10",
      role: "User",
      status: "done",
      action: "view",
    },
    {
      name: "Michael Green",
      email: "michael.green@example.com",
      createdAt: "2021-07-25",
      role: "Admin",
      status: "cancelled",
      action: "delete",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/vehicles/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      {/* <ReactTable /> */}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image src={user.img || "/noavatar.png"} alt="" width={40} height={40} className={styles.userImage} />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form

                  // action={deleteUser}
                  >
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={10} />
    </div>
  );
};

export default Vehicles;
