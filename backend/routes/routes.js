import express from "express"
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from "../controllers/transactionControllers.js"

const router = express.Router()

// @desc get all transactions
// route GET /api/transactions
// access public

router.route("/").get(getTransactions)

// @desc add new transaction
// route GET /api/transactions/
// access public
router.route("/").post(addTransaction)

// @desc delete a transaction
// route GET /api/transactions/:id
// access public
router.route("/:id").delete(deleteTransaction)
export default router
