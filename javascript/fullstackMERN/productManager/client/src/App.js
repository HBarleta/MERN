
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductForm from './components/ProductForm';
import {Routes, Route, useParams} from 'react-router-dom'
import DisplayProducts from './components/DisplayProducts';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<ProductForm/>}/>
          <Route path="/displayproduct/:id" element={<DisplayProducts></DisplayProducts>} />
          <Route path="/editproduct/:id" element={<EditProduct></EditProduct>} />
        </Routes>
    </div>
  );
}

export default App;
