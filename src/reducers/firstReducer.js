export const firstReducer = (state = 0, action) => {
  switch (action.type) {
    case "incrementar":
      return state + 1;
    case "decrementar":
      return state - 1;
    case "set":
      return action.payload;

    default:
      return state;
  }
};
