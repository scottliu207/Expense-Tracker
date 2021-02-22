import React, { useContext } from "react"
import { GlobalContext, GlobalProvider } from "./context/GlobalContext"

const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount)
  const totalAmount = amounts.reduce((acc, amount) => acc + amount)
  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h3>$ {totalAmount}</h3>
    </div>
  )
}

export default Balance
