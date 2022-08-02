import Store from './components/Store';
import { useState, useEffect } from 'react';
import ListItem from './components/Listitem';
import axios from 'axios'

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
    <div>
        <Store items={storeItem} 
        onItemAdd={(itemData) => {setStoreItem([...storeItem, itemData])}}
        loading={loading}/>
    </div>
  );
}

export default App;
