import Store from './components/Store';
import { useState, useEffect } from 'react';
import ListItem from './components/Listitem';
import axios from 'axios'

function App() {
  const [storeItem, setStoreItem] = useState([])
  
    useEffect(() => {
      //get method
      axios.get("https://fakestoreapi.com/products")
      .then(({data}) => setStoreItem(data))
    }, [])
  return (
    <div>
      {/* <ol>
        {storeItems.map((item) => (
        <ListItem text={item}/>
        ))}
      </ol> */}
        <Store items={storeItem} onItemAdd={(itemData) => {setStoreItem([...storeItem, itemData])}}/>
    </div>
  );
}

export default App;
