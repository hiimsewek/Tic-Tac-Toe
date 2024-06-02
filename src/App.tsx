import { Board, Button, Status } from "components";
import { GameContext } from "contexts/Game";
import { useContext } from "react";
import { GameCtx } from "types";
import "styles/globalStyles.css";

const App = () => {
  const { result, restartGame } = useContext(GameContext) as GameCtx;

  return (
    <div className="wrapper">
      <Status />
      <Board />
      {result && <Button onClick={restartGame}>Play again</Button>}
    </div>
  );
};

export default App;
