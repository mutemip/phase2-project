import Store from './components/Store';
import { useState, useEffect } from 'react';
import ListItem from './components/Listitem';
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Product from './components/Product';



function App() {

  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Store />}/>
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
