import TransactionModel from "../models/models.js"

export const getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionModel.find({})

    res.status(200).send({
      success: true,
      count: transactions.length,
      data: transactions,
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      error: "Server Error",
    })
  }
}

export const addTransaction = async (req, res) => {
  try {
    const { text, amount } = req.body

    const transaction = await TransactionModel.create({ text, amount })

    res.status(201).send({
      success: true,
      data: transaction,
    })
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message)
      res.status(400).send({
        success: false,
        message: messages,
      })
    }
    res.status(500).send({
      success: false,
      message: "Server Error",
    })
  }
}

export const deleteTransaction = async (req, res) => {
  try {
    const id = req.params.id
    const transaction = await TransactionModel.findById(id)
    await transaction.remove()

    return res.status(200).send({
      success: true,
      data: {},
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error",
    })
  }
}
