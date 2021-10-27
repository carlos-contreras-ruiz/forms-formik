import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

const initialState = {
  entities: [],
  filter: "all", //complete, incomplete
};

export const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  console.log(store, next, action);
  return next(action);
};

export const fetchThunk = () => async (dispatch) => {
  dispatch({ type: "todo/pending" });
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((res) => res.json());

    const todos = response.slice(0, 10);

    dispatch({ type: "todos/fulfilled", payload: todos });
  } catch (e) {
    dispatch({ type: "todo/error", error: e.message });
  }
};
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
export const fetchingReducer = (state = initialFetching, action) => {
  switch (action.type) {
    case "todo/pending":
      return { ...state, loading: "pending" };
    case "todo/error":
      return { ...state, loading: "rejected", error: action.error };
    case "todos/fulfilled":
      return { ...state, loading: "succeded" };
    default:
      return state;
  }
};

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

const selectTodos = (state) => {
  const {
    todos: { entities },
    filter,
  } = state;
  if (filter === "complete") {
    return entities.filter((todo) => todo.completed);
  }
  if (filter === "incomplete") {
    return entities.filter((todo) => !todo.completed);
  }
  return entities;
};

const selectStatus = (state) => state.todos.status;

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
      onClick={() =>
        dispatch({
          type: "todo/complete",
          payload: todo,
        })
      }
    >
      {todo.title}
    </li>
  );
};

function App() {
  const dispatch = useDispatch();
  //const state = useSelector((state) => state);
  const state = useSelector(selectTodos);
  const status = useSelector(selectStatus);
  const [value, setvalue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, completed: false, id };
    dispatch({ type: "todo/add", payload: todo });
    setvalue("");
  };

  if (status.loading === "pending") {
    return <p>Cargando</p>;
  }

  if (status.loading === "rejected") {
    return <p>Eroror: {status.error}</p>;
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setvalue(e.target.value)} />
      </form>
      <button
        onClick={() =>
          dispatch({
            type: "filters/filter-set",
            payload: "all",
          })
        }
      >
        Mostrar todos
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "filters/filter-set",
            payload: "complete",
          })
        }
      >
        Completados
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "filters/filter-set",
            payload: "incomplete",
          })
        }
      >
        Incompletos
      </button>
      <button onClick={() => dispatch(fetchThunk())}>Thunk</button>
      <ul>
        {state.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;
