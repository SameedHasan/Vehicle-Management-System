"use client";
import { vehicles_data,FiaData } from "@/lib/dummy_data";
import { Table, Tag } from "antd";
import React from "react";
import styles from "@/components/ui/dashboard/users/users.module.css";
import Search from "@/components/ui/dashboard/search/Search";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const VehiclesPage = () => {
  const router = useRouter();
  const vehicleColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
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
    // {
    //   title: "Purchase Date",
    //   dataIndex: "purchase_date",
    //   key: "purchase_date",
    //   render: (text) => new Date(text).toLocaleDateString(),
    // },
    // {
    //   title: "Price",
    //   dataIndex: "price",
    //   key: "price",
    //   render: (text) => text? `$${text?.toFixed(2)}`:"500,000.00",
    // },
    {
      title: "Fuel Capacity (L)",
      dataIndex: "fuel_capacity",
      key: "fuel_capacity",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        return <Tag
          className="table-tag"
          color={record.status == "Allotted" ? "green" : record.status == "Maintenance" ? "orange" : "red"}
        >
          {record.status}
        </Tag>
      }
    },
  ];

  return (
    <Suspense>
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
          dataSource={FiaData.Vehicles}
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
    </Suspense>
  );
};

export default VehiclesPage;
