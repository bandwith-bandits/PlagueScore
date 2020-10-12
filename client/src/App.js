import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import './assets/framework.css';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
