import express from "express"
import dotenv from "dotenv"
import transactions from "./routes/routes.js"
import connectDB from "./db.js"
import morgan from "morgan"
import path from "path"

const app = express()
dotenv.config()
connectDB()

app.use(express.json())
app.use("/api/transactions", transactions)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"))
  })
}

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
)
