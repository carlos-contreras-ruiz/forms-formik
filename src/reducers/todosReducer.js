import { combineReducers } from "redux";

export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case "filters/filter-set":
      return action.payload;
    default:
      return state;
  }
};

const initialFetching = {
  loading: "idle", //pending,succeded,reject
  error: null,
};
export const makefetchingReducer =
  (actions) =>
  (state = initialFetching, action) => {
    switch (action.type) {
      case actions[0]:
        return { ...state, loading: "pending" };
      case actions[1]:
        return { ...state, loading: "rejected", error: action.error };
      case actions[2]:
        return { ...state, loading: "succeded" };
      default:
        return state;
    }
  };

export const fetchingReducer = makefetchingReducer([
  "todo/pending",
  "todo/error",
  "todo/complete",
]);
export const todoReducer = (state = [], action) => {
  //console.log(state);
  switch (action.type) {
    case "todo/add":
      const state2 = state.concat({ ...action.payload });
      return state2;
    case "todo/delete":
      return state;
    case "todo/complete":
      const newTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    case "todos/fulfilled":
      return action.payload;
    default:
      return state;
  }
};

/*export const reducer = (state = initialState, action) => {
    return {
      entities: todoReducer(state.entities, action),
      filter: filterReducer(state.filter, action), //complete, incomplete
    };
  };*/
export const reducer = combineReducers({
  todos: combineReducers({
    entities: todoReducer,
    status: fetchingReducer,
  }),
  filter: filterReducer,
});
