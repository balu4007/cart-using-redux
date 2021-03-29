import React, { createContext, useContext, useReducer } from "react";
import { cartInitialState } from "./InitialState/CartInitialState";
import { cartReducer } from "./Reducers/CartReducer";

export const Globalcontext = createContext();
function GlobalProvider({ children }) {
  const [cartState, cartDispatcher] = useReducer(cartReducer, cartInitialState);
  return (
    <Globalcontext.Provider value={{ cartState, cartDispatcher }}>
      {children}
    </Globalcontext.Provider>
  );
}

export function GetContext() {
  return useContext(Globalcontext);
}

export default GlobalProvider;
