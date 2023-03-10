import "./App.css";
import { Home, Form, Landing, Detail } from "./views";
import NavBar from "./components/navBar/NavBar";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  //uso el hook para que navBar no se muestre en landing
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />

      <Route path="/create" render={() => <Form />} />
      <Route path="/detail/:id" render={() => <Detail />} />
    </div>
  );
}

export default App;
