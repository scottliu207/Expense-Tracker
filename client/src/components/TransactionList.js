import React, { useContext, useEffect } from "react"
import { GlobalContext } from "./context/GlobalState"
import Transaction from "./Transaction"

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return <Transaction transaction={transaction} key={transaction._id} />
        })}
      </ul>
    </div>
  )
}

export default TransactionList
