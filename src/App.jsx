import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDatailContainer from "./Components/ItemDatailContainer";
import { Routes, Route} from "react-router-dom";
import React from "react";

function App() {


  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDatailContainer/>} />
      </Routes>
    </div>
  )
}

export default App;