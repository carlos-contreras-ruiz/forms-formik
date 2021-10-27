import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [valor, setvalor] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const set = () => {
    dispatch({ type: "set", payload: valor });
    setvalor("");
  };
  return (
    <div>
      <p>Contador: {state}</p>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
      <button onClick={set}>Set</button>
      <input value={valor} onChange={(e) => setvalor(Number(e.target.value))} />
    </div>
  );
}

export default App;
