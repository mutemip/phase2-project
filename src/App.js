import Store from './components/Store';
import { useState, useEffect } from 'react';
import ListItem from './components/Listitem';
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  const [storeItem, setStoreItem] = useState([])
  const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      //get method
      axios.get("https://fakestoreapi.com/products")
      .then(({data}) => {
        setLoading(false)
        setStoreItem(data)
      })
    }, [])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Store items={storeItem} loading={loading}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
