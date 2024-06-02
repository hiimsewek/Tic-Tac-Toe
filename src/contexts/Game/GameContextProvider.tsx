import { useCallback, useState } from "react";
import GameContext from "./GameContext";
import { Board, Nullable, NullablePlayer } from "types";

type GameContextProviderProps = {
  children: React.ReactNode;
};

const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [result, setResult] = useState<NullablePlayer | "Draw">(null);
  const [xIsNext, setXisNext] = useState(true);
  const [winningRow, setWinningRow] = useState<Nullable<number[]>>(null);

  const changeTurn = () => {
    setXisNext(!xIsNext);
  };

  const checkGameResult = useCallback(() => {
    const winningRows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of winningRows) {
      const threeInRow =
        board[a] && board[a] === board[b] && board[a] === board[c];

      if (threeInRow) {
        setResult(board[a]);
        setWinningRow([a, b, c]);
      }
    }

    const boardIsFull = board.every((el) => el);

    !result && boardIsFull && setResult("Draw");
  }, [board, result]);

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setResult(null);
    setWinningRow(null);
  };

  const value = {
    board,
    setBoard,
    xIsNext,
    changeTurn,
    result,
    checkGameResult,
    restartGame,
    winningRow,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
