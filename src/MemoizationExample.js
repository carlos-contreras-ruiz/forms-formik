import { useState, useCallback, useMemo } from "react";
import Title from "./componentsOptimization/Title";
import MyForm from "./componentsOptimization/Forms/MyForm";
import MyList from "./componentsOptimization/Lists/MyList";

function App() {
  const [valores, setValores] = useState([]);
  const handleSubmit = useCallback((values) => {
    setValores((data) => [...data, values]);
  }, []);

  const iterador = 50000000;
  console.time("memo");
  const memoized = useMemo(() => {
    let total = 0;
    for (let i = 0; i < iterador; i++) {
      total = total * iterador;
    }
    return total;
  }, [iterador]);
  console.timeEnd("memo");

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  );
}

export default App;
