import {
  Link,
  Route,
  Switch,
  NavLink,
  Redirect,
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";

const Proyecto = () => {
  const match = useRouteMatch();
  const { proyectoId } = match.params;
  const params = useParams();
  //console.log(match);
  return (
    <h2>
      Proyecto ...{proyectoId}------{params.proyectoId}
    </h2>
  );
};

const Portafolio = () => {
  const match = useRouteMatch();
  const loggedIn = false;
  if (!loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={`${match.url}/proyecto-1`}>Proyecto 1</Link>
        </li>
        <li>
          {/* Con navlink tiene la clase active
          para saber en que ruta estamos */}
          <NavLink
            activeStyle={{
              fontSize: 20,
            }}
            activeClassName="activado"
            to={"/portafolio/proyecto-2"}
          >
            Proyecto 2
          </NavLink>
        </li>
      </ul>
      <div>
        <Switch>
          {/*<Route path={`${match.path}/:proyectoId`}>*/}
          <Route path={"/portafolio/:proyectoId"}>
            <Proyecto />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const Error404 = () => {
  return (
    <div>
      <h4>Error 404</h4>
    </div>
  );
};

function App() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(useLocation().search);
  console.log({ history });
  console.log({ location });
  console.log(query.get("name"));
  console.log(query.get("tttt"));

  const goForward = () => {
    history.goForward();
  };
  const goback = () => {
    history.goback();
  };
  const pushHistory = () => {
    history.push("/portafolio");
  };
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
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Switch>
          <Route path="/portafolio">
            <Portafolio />
          </Route>
          <Route exact path="/">
            <h1>Inicio</h1>
          </Route>
          <Route exact path="/perfil">
            <h1>Perfil</h1>
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
