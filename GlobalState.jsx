import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
  transactions: [],
  balance: 0,
};

// create  context
export const GlobalContext =  createContext(initialState);

// provider component

export const  GlobalProvider = ({ children }) => {
    const  [state, dispatch] = useReducer(AppReducer, initialState);

    //actions

    function  deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }
    function  AddTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return (<GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,AddTransaction}}>
        {children}
    </GlobalContext.Provider>)
}
