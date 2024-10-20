import styles from "@/components/ui/auth/login.module.css";
import LoginForm from "@/components/ui/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
