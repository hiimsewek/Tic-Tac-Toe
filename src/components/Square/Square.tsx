import { Nullable } from "types";
import styles from "./Square.module.css";

type SquareProps = {
  value: Nullable<"X" | "O">;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <div onClick={onSquareClick} className={styles.square}>
      {value}
    </div>
  );
};

export default Square;
