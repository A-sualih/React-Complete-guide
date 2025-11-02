import "./App.css";
import NavBar from "./Components/NavBAr/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Cart from "./Components/Pages/Cart/Cart";
import Placeorder from "./Components/Pages/PlaceOrder/Placeorder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopApp from "./Components/loginPopApp/LoginPopApp";
function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {/* {showLogin?<LoginPopApp/>:<> </>} */}
    {showLogin && <LoginPopApp setShowLogin={setShowLogin}/>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Placeorder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
