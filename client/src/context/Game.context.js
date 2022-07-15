import React, { useState, useContext } from "react";

const GameContext = React.createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const value = {
    index,
    setIndex,
    questions,
    setQuestions,
    score,
    setScore,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
