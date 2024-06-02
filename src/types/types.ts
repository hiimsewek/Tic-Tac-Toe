export type Nullable<T> = T | null;

export type Player = "X" | "O";
export type NullablePlayer = Player | null;
export type Board = Nullable<Player>[];

export type GameCtx = {
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
  xIsNext: boolean;
  changeTurn: () => void;
  result: NullablePlayer | "Draw";
  checkGameResult: () => void;
  restartGame: () => void;
  winningRow: Nullable<number[]>;
};
