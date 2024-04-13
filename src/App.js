import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Shop } from './/pages/Shop/Shop'
import { Cart } from './/pages/Cart/Cart'
import { ShopContext, ShopContextProvider } from "./context/shopcontext";

function App() {
  return (
  <div className="app">
  <ShopContextProvider> 
  <Router>
    <Navbar/>
      
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
