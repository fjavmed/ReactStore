import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Products from './components/Productos';
import {Switch, BrowserRouter, Route} from "react-router-dom";
import CheckoutPage from './components/CheckoutPage';
import Product from "./components/CardComponent";


function App() {
  
  return (
    <BrowserRouter>
    <div className="App" >  
        <NavbarComponent />
      <Switch>
         <Route path="/checkout-page">
            <CheckoutPage />
         </Route>
         <Route path="/">
           <Products />
           {/* <Product /> */}
         </Route>
      </Switch>
         </div>
   </BrowserRouter>
   
    );
  }
  
  export default App;