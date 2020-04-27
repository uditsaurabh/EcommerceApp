import React, { createContext, useReducer } from "react";
import reducer from "../Components/BookReducer";
import initial from "../dataInitialState";
export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, dispatch] = useReducer(reducer, initial);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
