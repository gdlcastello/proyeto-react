import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDatailContainer from "./Components/ItemDatailContainer";
import { Routes, Route} from "react-router-dom";
import React from "react";
import CartProvider from "./context/CartProvider";


function App() {


  return (
  
     <CartProvider>
       <Navbar />

       <Routes>
         <Route path="/" element={<ItemListContainer />} />
         <Route path="/category/:categoryId" element={<ItemListContainer />} />
         <Route path="/item/:id" element={<ItemDatailContainer/>} />
         <Route path="/Checkout" element={<ItemDatailContainer/>} />
       </Routes>
     </CartProvider>
  )
}

export default App;