import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Orders from './components/Orders/Orders/Orders';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Review from './components/Review/Review/Review';
import ServiceList from './components/ServiceList/ServiceList/ServiceList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/order">
            <Orders></Orders>
          </PrivateRoute>

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/service">
            <ServiceList></ServiceList>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
