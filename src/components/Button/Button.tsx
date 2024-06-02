import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className={styles.button}>
      {children}
    </div>
  );
};

export default Button;
