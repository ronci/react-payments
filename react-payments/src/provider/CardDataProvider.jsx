import { createContext, useReducer } from "react";
import { REDUCER_TYPE } from "../constants";

export const CardDataContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case REDUCER_TYPE.CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};

const CardDataProvider = ({ children }) => {
  const [cardData, dispatch] = useReducer(reducer, initialState);

  return (
    <CardDataContext.Provider value={{ cardData, dispatch }}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardDataProvider;
