import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setComplete, setFilter, fetchThunk } from "./features/todos";

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
      onClick={() => dispatch(setComplete(todo))}
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
      <button onClick={() => dispatch(setFilter("all"))}>Mostrar todos</button>
      <button onClick={() => dispatch(setFilter("complete"))}>
        Completados
      </button>
      <button onClick={() => dispatch(setFilter("incomplete"))}>
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
