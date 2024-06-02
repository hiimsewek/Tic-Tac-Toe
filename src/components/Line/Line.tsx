import { getLineTransformations } from "./lineHelpers";
import styles from "./Line.module.css";

type LineProps = {
  winningRow: number[];
};

const Line = ({ winningRow }: LineProps) => {
  const { moveX, moveY, rotate } = getLineTransformations(winningRow);

  return (
    <div
      className={styles.line}
      style={{
        transform: rotate,
        left: moveX,
        top: moveY,
      }}
    ></div>
  );
};

export default Line;
