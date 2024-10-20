import Footer from "@/components/ui/dashboard/footer/Footer";
import Navbar from "@/components/ui/dashboard/navbar/Navbar";
import Sidebar from "@/components/ui/dashboard/sidebar/Sidebar";
import styles from "@/components/ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
