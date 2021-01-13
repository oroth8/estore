import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import ProductSceen from "./screens/ProductScreen";
import Cart from "./screens/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={ProductSceen} />
            <Route path="/cart/:id?" component={Cart} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
