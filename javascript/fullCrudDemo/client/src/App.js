
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display';
import Create from './components/Create';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Details from './components/Details';
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Display/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
