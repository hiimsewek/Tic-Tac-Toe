const getRowAndColumn = (cell: number): [number, number] => {
  let row = 0;
  let column = 0;

  if (cell >= 3 && cell <= 5) row = 1;
  else if (cell > 5 && cell <= 8) row = 2;

  switch (cell) {
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

export const getLineTransformations = (row: number[]) => {
  const [rowStart, columnStart] = getRowAndColumn(row[0]);
  const [rowMiddle, columnMiddle] = getRowAndColumn(row[1]);

  const translateY =
    rowStart === 0
      ? rowStart * 100
      : rowStart === 1
      ? rowStart * 100
      : rowStart * 100;

  const translateX =
    columnStart === 0
      ? columnStart * 100
      : columnStart === 1
      ? columnStart * 100
      : columnStart * 100;

  const angle =
    columnMiddle < columnStart && rowStart !== rowMiddle
      ? 135
      : columnMiddle > columnStart && rowStart !== rowMiddle
      ? 45
      : columnStart === columnMiddle
      ? 90
      : 0;

  const rotate = `rotate(${angle}deg)`;

  const [moveX, moveY] =
    angle === 135
      ? ["300px", 0]
      : angle === 45
      ? [0, 0]
      : angle === 90
      ? [`${translateX + 50}px`, 0]
      : [0, `${translateY + 50}px`];

  return { rotate, moveX, moveY };
};
