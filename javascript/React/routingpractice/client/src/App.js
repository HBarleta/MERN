
import './App.css';

import {Routes, Route} from "react-router-dom"
import Routing from './components/Routing';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<h1>Welcome</h1>}></Route>
        <Route path='/:par/:textColor/:bgColor' element={<Routing/>} />
      </Routes>
    </div>
  );
}

export default App;
