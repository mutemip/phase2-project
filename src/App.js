import Store from './components/Store';
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
