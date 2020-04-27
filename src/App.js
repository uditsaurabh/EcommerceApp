import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import BookContextProvider from "./context/BookContext";
import BookList from "./Components/BookList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import ShoppingCart from "./Components/ShoppingCart";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about/:name" component={About}></Route>
              <Route exact path="/cart" component={ShoppingCart}></Route>
            </Switch>
          </Router>
        </CartContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;
