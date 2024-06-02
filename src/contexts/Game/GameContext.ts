import { createContext } from "react";
import { GameCtx, Nullable } from "types";

const GameContext = createContext<Nullable<GameCtx>>(null);

export default GameContext;
