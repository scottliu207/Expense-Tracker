export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      }

    case "ADD_TRANSACTION":
      return {
        transactions: [...state.transactions, action.payload],
      }

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      }

    case "ERROR_TRANSACTIONS":
      return {
        error: action.payload,
      }

    default:
      return state
  }
}
