import { getVehicleAllotmentById } from "@/lib/actions";
import React from "react";
import styles from "./tabs.module.css";

const Allotment = async ({ vehicle_id }) => {
  const allotment = await getVehicleAllotmentById(vehicle_id);
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Allotment Details</h2>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <strong>Allotment Date:</strong> <span>{allotment.allotment_date}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Return Date:</strong> <span>{allotment.return_date ? allotment.return_date : "N/A"}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Allotment Order No:</strong> <span>{allotment.allotment_order_no}</span>
        </div>
        <div className={styles.gridItem}>
          <strong>Approval Status:</strong> <span>{allotment.approval_status}</span>
        </div>
        <div className={`${styles.gridItem} ${styles.gridItemFullRow}`}>
          <strong>Comments:</strong> <span>{allotment.comments}</span>
        </div>
      </div>
    </div>
  );
};

export default Allotment;
