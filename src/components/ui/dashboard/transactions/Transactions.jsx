import Image from "next/image";
import styles from "./transactions.module.css";
import { Tag } from "antd";

const Transactions = () => {
  const vehicleData = [
    {
      vehicle: "Toyota Camry",
      allottee: "John Doe",
      allotmentDate: "2023-06-15",
      orderNo: "ORD-1001",
      status: "done",
    },
    {
      vehicle: "Honda Civic",
      allottee: "Jane Smith",
      allotmentDate: "2023-07-01",
      orderNo: "ORD-1002",
      status: "pending",
    },
    {
      vehicle: "Ford F-150",
      allottee: "Robert Brown",
      allotmentDate: "2022-12-10",
      orderNo: "ORD-0958",
      status: "cancelled",
    },
    {
      vehicle: "Tesla Model 3",
      allottee: "Emily Johnson",
      allotmentDate: "2023-09-20",
      orderNo: "ORD-1020",
      status: "done",
    },
    {
      vehicle: "BMW X5",
      allottee: "Michael Green",
      allotmentDate: "2021-04-25",
      orderNo: "ORD-0785",
      status: "cancelled",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Allotments</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Vehicle</td>
            <td>Allottee</td>
            <td>Allotment Date</td>
            <td>Order No.</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map((vehicle) => (
            <tr>
              <td>
                <div className={styles.user}>
                  {/* <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} /> */}
                  {vehicle.vehicle}
                </div>
              </td>

              <td>{vehicle.allottee}</td>
              <td>{vehicle.allotmentDate}</td>
              <td>{vehicle.orderNo}</td>
              <td>
  <Tag
    className="table-tag"
                  color={vehicle.status=="done" ? "green" : vehicle.status=="pending" ? "orange" : "red"}
  >
    {vehicle.status}
  </Tag>
</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
{/* <span className={`${styles.status} ${styles[vehicle.status]}`}></span> */ }