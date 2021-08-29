import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Products from "./components/Productos";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import Checkout from "./components/CheckoutForm/Checkout";
import Footer from "./components/Footer";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
          <SignIn />
          </Route>
            <Route path="/checkout-page">
            <CheckoutPage />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
          </Switch>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
