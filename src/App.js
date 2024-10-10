import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Itemdetails from "./pages/Itemdetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./Providers/WishlistProvider";
import Cart from "./pages/Cart";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import { StepperActivePropsProvider } from "./Providers/StepperActivePropsProvider";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={
              <WishlistProvider>
                <Products />
              </WishlistProvider>
            }
          />
          <Route
            path="/products/:id"
            element={
              <WishlistProvider>
                <Itemdetails />
              </WishlistProvider>
            }
          />
          <Route path="/contact" element={<Contact />} />   
          <Route
            path="/shopease/checkout/cart"
            element={
              <StepperActivePropsProvider>
                <Cart />
              </StepperActivePropsProvider>
            }
          />
          <Route
            path="/shopease/checkout/address"
            element={
              <StepperActivePropsProvider>
                <Address />
              </StepperActivePropsProvider>
            }
          />
          <Route
            path="/shopease/checkout/payment"
            element={
              <StepperActivePropsProvider>
                <Payment />
              </StepperActivePropsProvider>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
