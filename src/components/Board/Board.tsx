import { useContext } from "react";
import { Line, Square } from "components";
import { GameContext } from "contexts";
import { GameCtx, Player } from "types";
import styles from "./Board.module.css";

const Board = () => {
  const { board, setBoard, changeTurn, xIsNext, result, winningRow } =
    useContext(GameContext) as GameCtx;

  const onSquareClick = (i: number) => {
    if (board[i] || result) return;

    const data = [...board];

    const value: Player = xIsNext ? "X" : "O";
    data[i] = value;

    setBoard(data);
    changeTurn();
  };

  return (
    <>
      <div className={styles.board}>
        <div className={styles.row}>
          <Square
            value={board[0]}
            onSquareClick={onSquareClick.bind(this, 0)}
          />
          <Square
            value={board[1]}
            onSquareClick={onSquareClick.bind(this, 1)}
          />
          <Square
            value={board[2]}
            onSquareClick={onSquareClick.bind(this, 2)}
          />
        </div>
        <div className={styles.row}>
          <Square
            value={board[3]}
            onSquareClick={onSquareClick.bind(this, 3)}
          />
          <Square
            value={board[4]}
            onSquareClick={onSquareClick.bind(this, 4)}
          />
          <Square
            value={board[5]}
            onSquareClick={onSquareClick.bind(this, 5)}
          />
        </div>
        <div className={styles.row}>
          <Square
            value={board[6]}
            onSquareClick={onSquareClick.bind(this, 6)}
          />
          <Square
            value={board[7]}
            onSquareClick={onSquareClick.bind(this, 7)}
          />
          <Square
            value={board[8]}
            onSquareClick={onSquareClick.bind(this, 8)}
          />
        </div>
        {winningRow && <Line winningRow={winningRow} />}
      </div>
    </>
  );
};

export default Board;
