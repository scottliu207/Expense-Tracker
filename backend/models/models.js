import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "please enter a name for transaction"],
  },
  amount: {
    type: Number,
    required: [true, "please enter positive or negative number for amount."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const TransactionModel = mongoose.model("transactions", transactionSchema)

export default TransactionModel
