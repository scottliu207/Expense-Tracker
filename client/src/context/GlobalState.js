import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
import axios from "axios"

const initialState = {
  transactions: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getTransactions = async () => {
    try {
      const res = await axios.get("/api/transactions")

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: error,
      })
    }
  }

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`)

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: error,
      })
    }
  }

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    try {
      const res = await axios.post(`/api/transactions`, transaction, config)

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      })
    } catch (error) {
      dispatch({
        type: "ERROR_TRANSACTIONS",
        payload: error,
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
