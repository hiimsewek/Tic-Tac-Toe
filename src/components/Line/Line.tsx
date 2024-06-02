import styles from "./Line.module.css";

type LineProps = {
  winningRow: number[];
};

const Line = ({ winningRow }: LineProps) => {
  const getRowAndColumn = (cell: number): [number, number] => {
    let row: number;
    let column: number;

    if (cell <= 2) row = 0;
    else if (cell >= 3 && cell <= 5) row = 1;
    else row = 2;

    switch (cell) {
      case 0:
      case 3:
      case 6:
        column = 0;
        break;
      case 1:
      case 4:
      case 7:
        column = 1;
        break;
      case 2:
      case 5:
      case 8:
        column = 2;
        break;
      default:
        break;
    }

    return [row, column];
  };

  const [rowStart, columnStart] = getRowAndColumn(winningRow[0]);
  const [rowMiddle, columnMiddle] = getRowAndColumn(winningRow[1]);

  console.log(rowStart, columnStart, columnMiddle);
  const translateX =
    rowStart === 0
      ? rowStart * 100
      : rowStart === 1
      ? rowStart * 100
      : rowStart * 100;

  const translateY =
    columnStart === 0
      ? columnStart * 100
      : columnStart === 1
      ? columnStart * 100
      : columnStart * 100;

  const angle =
    columnMiddle < columnStart && rowStart !== rowMiddle
      ? "135deg"
      : columnMiddle > columnStart && rowStart !== rowMiddle
      ? "45deg"
      : columnStart === columnMiddle
      ? "90deg"
      : 0;

  const transformValue = `rotate(${angle})`;

  // const top = `${translateY - 0}px`;
  // const left = `${translateX} px`;
  const [x, y] =
    angle === "135deg"
      ? [[`${400}px`, "100px"]]
      : angle === "45deg"
      ? [`50px`, "0"]
      : angle === "90deg"
      ? [`${translateX - 200}px`, "100px"]
      : [`0`, `${translateX + 50}px`];

  console.log({ translateX, translateY, angle });

  return (
    <div
      className={styles.line}
      style={{
        transform: transformValue,
        left: x,
        top: y,
      }}
    ></div>
  );
};

export default Line;
