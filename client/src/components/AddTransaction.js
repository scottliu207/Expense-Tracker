import React, { useState, useContext } from "react"
import { GlobalContext } from "./context/GlobalContext"

const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
  const { AddTransaction } = useContext(GlobalContext)

  const submitHandler = (e) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 100000000)
    AddTransaction({
      id,
      text,
      amount: +amount,
    })

    setText("")
    setAmount("")
  }

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            vlaue={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
