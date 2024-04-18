import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Shop } from './/pages/Shop/Shop';
import { Cart } from './/pages/Cart/Cart';
import { Hero } from './components/Hero';
import { ShopContext, ShopContextProvider } from "./context/shopcontext";
import styles from './App.css'

function App() {
  return (
  <div className="app">
  <ShopContextProvider> 
  <Router>
    <Navbar/>
    <Hero/>
      
      <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/cart"  element= {<Cart/>}/>
      
      </Routes>


    </Router>
    </ShopContextProvider>
   

  </div>
  );
}

export default App;
