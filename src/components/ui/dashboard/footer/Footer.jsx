import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Sameed Hasan</div>
        <div className={styles.text}>© All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
