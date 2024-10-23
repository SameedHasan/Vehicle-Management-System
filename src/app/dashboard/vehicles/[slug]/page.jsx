import React from "react";
import styles from "@/components/ui/dashboard/users/users.module.css";
import { Tabs } from "antd";
import Details from "@/components/ui/dashboard/vehicle/tabs/Details";
import Allotment from "@/components/ui/dashboard/vehicle/tabs/Allotment";
import Maintainence from "@/components/ui/dashboard/vehicle/tabs/Maintainence";
import Logsbook from "@/components/ui/dashboard/vehicle/tabs/Logsbook";
const VehicleDetails = ({ params }) => {
  const vehicle_id = params.slug;
  const items = [
    {
      key: "0",
      label: "Details",
      children: <Details vehicle_id={vehicle_id} />,
    },
    {
      key: "1",
      label: "Allotment",
      children: <Allotment vehicle_id={vehicle_id} />,
    },
    {
      key: "2",
      label: "Maintainence",
      children: <Maintainence vehicle_id={vehicle_id} />,
    },
    {
      key: "3",
      label: "Logs Book",
      children: <Logsbook vehicle_id={vehicle_id} />,
    },
  ];
  return (
    <div className={styles.container}>
      {/* {vehicle_id} */}
      <Tabs items={items} size="large" tabBarGutter={30} />
    </div>
  );
};

export default VehicleDetails;
