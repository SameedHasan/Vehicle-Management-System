import { getVehicleById } from "@/lib/actions";
import React from "react";
import styles from "./tabs.module.css";
import { Empty, Tag } from "antd";
const Details = async ({ vehicle_id }) => {
  const vehicle = await getVehicleById(vehicle_id);
  if (!vehicle) {
    return <div className={styles.container}>
      <h2 className={styles.heading}>Vehicle Details</h2>
      <Empty />
    </div> 
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Vehicle Details</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <strong>Make:</strong> <span>{vehicle.make}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Model:</strong> <span>{vehicle.model}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Type:</strong> <span>{vehicle.type}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Chassis No:</strong> <span>{vehicle.chassis_no}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Engine No:</strong> <span>{vehicle.engine_no}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Registration No:</strong> <span>{vehicle.reg_no}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Color:</strong> <span>{vehicle.color}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Status:</strong> <span><Tag
            className="table-tag"
            color={vehicle.status == "Allotted" ? "green" : vehicle.status == "Maintenance" ? "orange" : "red"}
          >
            {vehicle.status}
          </Tag></span>
        </div>
      </div>

      <h2 className={styles.heading}>Purchase Details</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <strong>Purchase Date:</strong> <span>{vehicle.purchase_date}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Price:</strong> <span>Rs. {vehicle.price}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Purchase Order No:</strong> <span>{vehicle.purchase_order_no}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Fuel Capacity:</strong> <span>{vehicle.fuel_capacity}L</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
