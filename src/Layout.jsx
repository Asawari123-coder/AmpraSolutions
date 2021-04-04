import React from "react";
import { Switch, Route } from "react-router-dom";
import  Header  from './shared/presentation/Header';
import  Home  from './components/Home';
import  Login  from './components/user/container/Login';
import  Register  from './components/user/container/Register'



export const Layout = () => {
    return (
        <>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
        
    )
}

 
export default Layout;
