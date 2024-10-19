import Card from "@/components/ui/dashboard/card/card";
import styles from "@/components/ui/dashboard/dashboard.module.css";
import Transactions from "@/components/ui/dashboard/transactions/Transactions";
import Rightbar from "@/components/ui/dashboard/rightbar/Rightbar";
import Chart from "@/components/ui/dashboard/chart/Chart";

const cards = [
  {
    id: 1,
    title: "Total Vehicles",
    number: 10928,
    change: 12,
  },
  {
    id: 2,
    title: "Total Expenses",
    number: 8236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6642,
    change: 18,
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;
