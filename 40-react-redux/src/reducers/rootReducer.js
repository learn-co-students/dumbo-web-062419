export default (state={ count: 0 }, action) => {
  // console.log("our reducer's state: ", state)
  // console.log("our reducer's action: ", action)

  switch (action.type) {
    case "UPDATE_COUNT":
      return { count: action.count }

    case "INCREMENT_COUNT":
      return { count: state.count + action.amount }

    case "DECREMENT_COUNT":
      return { count: state.count - action.amount }

    default:
      return state
  }
}
