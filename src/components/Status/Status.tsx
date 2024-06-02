import { useContext, useEffect } from "react";
import { GameContext } from "contexts";
import { GameCtx } from "types";
import styles from "./Status.module.css";

const Status = () => {
  const { board, xIsNext, result, checkGameResult } = useContext(
    GameContext
  ) as GameCtx;

  useEffect(() => {
    checkGameResult();
  }, [board, checkGameResult]);

  const player = xIsNext ? "X" : "O";
  const gameResult =
    result === "O" || result === "X"
      ? `${result} won!`
      : result === "Draw"
      ? "It is a draw!"
      : null;

  const status = !result
    ? `It is ${player}'s turn.`
    : `Game Over. ${gameResult}`;

  return <div className={styles.statusText}>{status}</div>;
};

export default Status;
