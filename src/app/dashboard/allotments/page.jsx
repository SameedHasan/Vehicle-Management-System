"use client";
import { allotment_data, vehicles_data } from "@/lib/dummy_data";
import { Table } from "antd";
import React from "react";
import styles from "@/components/ui/dashboard/users/users.module.css";
import Search from "@/components/ui/dashboard/search/Search";
import Link from "next/link";
const Page = () => {
  const allotmentColumns = [
    {
      title: "Vehicle ID",
      dataIndex: "vehicle_id",
      key: "vehicle_id",
    },
    {
      title: "Employee ID",
      dataIndex: "employee_id",
      key: "employee_id",
    },
    {
      title: "Allotment Date",
      dataIndex: "allotment_date",
      key: "allotment_date",
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Return Date",
      dataIndex: "return_date",
      key: "return_date",
      render: (text) => (text ? new Date(text).toLocaleDateString() : "N/A"),
    },
    {
      title: "Allotment Order No",
      dataIndex: "allotment_order_no",
      key: "allotment_order_no",
    },
    {
      title: "Approval Status",
      dataIndex: "approval_status",
      key: "approval_status",
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "comments",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/vehicles/add">
          <button className={styles.addButton}>Add New Vehicle</button>
        </Link>
        {/* <AddButton addVehicle={AddUser} /> */}
      </div>

      <Table
        columns={allotmentColumns}
        rowKey={(record) => record.id} // Assuming your API returns a field called 'id'
        dataSource={allotment_data}
        // pagination={tableParams.pagination}
        // loading={loading}
        // onChange={handleTableChange}
      />
    </div>
  );
};

export default Page;
