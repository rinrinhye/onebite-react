import { createContext, useContext } from "react";

export const stateContext = createContext();
export const dispatchContext = createContext();

export const useStateContext = () => useContext(stateContext);
export const useDispatchContext = () => useContext(dispatchContext);
