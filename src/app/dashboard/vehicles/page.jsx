"use client";
import { vehicles_data } from "@/lib/dummy_data";
import { Table } from "antd";
import React from "react";
import styles from "@/components/ui/dashboard/users/users.module.css";
import Search from "@/components/ui/dashboard/search/Search";
import Link from "next/link";
import { useRouter } from "next/navigation";

const VehiclesPage = () => {
  const router = useRouter();
  const vehicleColumns = [
    {
      title: "Make",
      dataIndex: "make",
      key: "make",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Chassis No",
      dataIndex: "chassis_no",
      key: "chassis_no",
    },
    {
      title: "Engine No",
      dataIndex: "engine_no",
      key: "engine_no",
    },
    {
      title: "Registration No",
      dataIndex: "reg_no",
      key: "reg_no",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchase_date",
      key: "purchase_date",
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => `$${text.toFixed(2)}`,
    },
    {
      title: "Fuel Capacity (L)",
      dataIndex: "fuel_capacity",
      key: "fuel_capacity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
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
        rowClassName="pointer"
        columns={vehicleColumns}
        rowKey={(record) => record.id} // Assuming your API returns a field called 'id'
        dataSource={vehicles_data}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              router.push(`/dashboard/vehicles/${record.id}`);
            },
          };
        }}
        // pagination={tableParams.pagination}
        // loading={loading}
        // onChange={handleTableChange}
      />
    </div>
  );
};

export default VehiclesPage;
