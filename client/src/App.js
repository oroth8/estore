import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Shipping from "./screens/Shipping";
import PaymentMethod from "./screens/PaymentMethod";
import PlaceOrder from "./screens/PlaceOrder";
import Order from "./screens/Order";
import UserList from "./screens/UserList";
import UserEdit from "./screens/UserEdit";
import ProductList from "./screens/ProductList";
import ProductEdit from "./screens/ProductEdit";
import OrderList from "./screens/OrderList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/login" component={Login} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/payment" component={PaymentMethod} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/register" component={Register} />
            <Route path="/admin/userlist" component={UserList} />
            <Route path="/admin/user/:id/edit" component={UserEdit} />
            <Route path="/admin/productlist" component={ProductList} exact />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductList}
              exact
            />
            <Route path="/admin/product/:id/edit" component={ProductEdit} />
            <Route path="/admin/orderlist" component={OrderList} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/order/:id" component={Order} />
            <Route path="/search/:keyword" component={Home} exact />
            <Route path="/page/:pageNumber" component={Home} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={Home}
              exact
            />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
