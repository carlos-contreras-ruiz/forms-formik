import { Link, Route, Switch } from "react-router-dom";

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={"/potafolio/proyecto-1"}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={"/potafolio/proyecto-2"}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={"/potafolio/proyecto-1"}>
            <h2>Proyecto1</h2>
          </Route>
          <Route path={"/potafolio/proyecto-2"}>
            <h2>Proyecto2</h2>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
            <Link>Inicio3</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Switch>
          <Route exact path="/portafolio">
            <Portafolio />
          </Route>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
