import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Products from './Components/Products/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './Components/Orders/Orders';
import Deals from './Components/Deals/Deals';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Checkout from './Components/Checkout/Checkout';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav>
              <Link style={{margin: '15px'}} to="/">Home</Link>
            </Nav>
            <Nav>
              <Link  style={{margin: '15px'}} to="/orders">Bookings</Link>
            </Nav>
            <Nav>
              <Link  style={{margin: '15px'}} to="/review">Review</Link>
            </Nav>
            <Nav>
              <Link style={{margin: '15px'}}  to="/login">Login</Link>
            </Nav>
            <Nav>
              <Link style={{margin: '15px'}}  to="/admin">Admin</Link>
            </Nav>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link> */}
            {/* <Nav.Link href="https://secure-hollows-18485.herokuapp.com">Admin</Nav.Link> */}
            {/* <Nav.Link href="/deals">Deals</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/login">{loggedInUser.name}</Nav.Link> */}
          </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <Route path="/Login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          {/* <PrivateRoute path="/book/:transportationType">
            <Book />
          </PrivateRoute> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
