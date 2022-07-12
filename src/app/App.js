import React from "react";
import Home from "../pages/Home";
import Item from "../pages/Item";
import Customer from "../pages/Customer";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='customer' element={<Customer/>}/>
          <Route path="item" element={<Item/>}/>
      </Routes>
  );
}

export default App;
