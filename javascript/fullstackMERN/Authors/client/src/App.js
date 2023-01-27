
import './App.css';
import AuthorsDisplay from './components/AuthorsDisplay';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Routes>
      <Route path="/" element={<AuthorsDisplay/>}></Route>
      <Route path="/author/add" element={<AddAuthor/>}></Route>
      <Route path="/author/edit/:id" element={<EditAuthor/>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
