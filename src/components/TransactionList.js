import React, { useContext } from "react"
import { GlobalContext } from "./context/GlobalContext"
import Transaction from "./Transaction"

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          console.log(transaction)
          return <Transaction transaction={transaction} key={transaction.id} />
        })}
      </ul>
    </div>
  )
}

export default TransactionList