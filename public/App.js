import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <Navbar className="border-bottom" variant="dark" bg="dark" sticky="top" expand="lg">
          <Navbar.Brand href="/">Magdalena Gorka</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <NavLink to="/">Home</NavLink> */}
            
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Videos">Videos</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/About" component={About} />
      </BrowserRouter>
    );
  }
}

export default App;
