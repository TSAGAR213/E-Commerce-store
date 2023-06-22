import { useState } from 'react';
import './App.css';
import Main from './components/opening/Main';
import Cart from "./components/Cart/cart"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  let [cartData,setCartData]=useState([]);
  let addtoCart=(data)=>{
    setCartData(old=>[...old,data])
  }
  return <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Main cartData={cartData} addtoCart={addtoCart}/>}/>
  <Route path='cart' element={<Cart cartData={cartData}/>}/>
  <Route path='*' element={<div>Page not found</div>}/>
 </Routes>
 </BrowserRouter>
  </>
    
  ;
}

export default App;
