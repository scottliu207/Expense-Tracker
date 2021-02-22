import React, { useContext } from "react"
import { GlobalContext, GlobalProvider } from "./context/GlobalContext"

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)

  const totalAmount = amounts.reduce((acc, amount) => acc + amount)

  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h2>$ {totalAmount}</h2>
    </div>
  )
}

export default Balance
