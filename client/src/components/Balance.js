import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import numberWithCommas from "../utils/format"

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => {
    return transaction.amount
  })

  const totalAmount = amounts.reduce((acc, amount) => acc + amount, 0)

  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <h2>$ {numberWithCommas(totalAmount)}</h2>
    </div>
  )
}

export default Balance
