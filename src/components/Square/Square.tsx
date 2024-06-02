import styles from "./Square.module.css";

type SquareProps = {
  value: "X" | "O" | null;
  onSquareClick?: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <div onClick={onSquareClick} className={styles.square}>
      {value}
    </div>
  );
};

export default Square;
