import { createContext } from "react";
import { useReducer } from "react";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
};

const reducer = (state, action) => {
  if (action.type === "NEXT_QUESTION") {
    return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
  }
  return state;
};

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  console.log("render, state");
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
