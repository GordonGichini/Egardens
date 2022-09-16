import React, {Component} from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
import Login from "./Login";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import NoMatchPage from "./NoMatchPage"

export default class App extends Component{
render(){
return( 
<BrowserRouter>
    <NavBar />
    <Switch>
    <Route path="/"exact component={Login}/>
    <Route path="/dashboard"exact component={Dashboard}/>
    <Route path="/customers"exact component={CustomerList}/>
    <Route path="/cart"exact component={ShoppingCart}/>
    <Route path="*" component={NoMatchPage}/>
    </Switch>
</BrowserRouter>
);
}
}