import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import './assets/framework.css';
import Home from "./views/Home/Home";
import Results from "./views/Results/Results";
import BusinessPage from "./views/BusinessPage/BusinessPage";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/search" component={Results} />
        <Route path="/page/:pageName" component={BusinessPage} />
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
