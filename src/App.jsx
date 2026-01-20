import './App.css'
import Home from './pages/home'
import AddPost from './pages/addpost'
import Login from './pages/login'
import Navbar from './component/NavBar'
import Prayer from './pages/Prayer'
import Profile from './pages/profile'
import Cart from './pages/cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

function App() {

  const [cart,setCart] = useState([]);

  const addToCart = (product) =>{
    if(!cart.find(item => item.id === product.id))
    {
      setCart([...cart,product]);
      alert("The art is added to cart!");
    }else{
      alert("Failed to add to Cart");
      alert(" This piece is already in your cart.");
    }
  };

  const removeFromCart = (id) =>{
    setCart(cart.filter(item => item.id !== id));
  }
  return (
    <Router>
      <Navbar cart={cart}/>
      <div className='page-content'>
      <Routes>
        <Route path = "/" element = {<Home addToCart={addToCart}/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/profile" element={<Profile/>}/>
        <Route path = "/addpost" element={<AddPost/>}/>
        <Route path = "/prayer" element={<Prayer/>}/>
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App