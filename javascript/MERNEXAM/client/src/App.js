import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PetDisplay from './components/PetDisplay';
import {Routes, Route} from 'react-router-dom'
import AddPet from './components/AddPet';
import PetEdit from './components/PetEdit';
import PetDetails from './components/PetDetails';

function App() {
  return (

    <div className="App">
     
      <Routes>
        <Route path="/" element={<PetDisplay></PetDisplay>}/>
        <Route path="/pets/add" element={<AddPet/>}/>
        <Route path="/pets/edit/:id" element={<PetEdit/>} />
        <Route path="/pets/view/:id" element={<PetDetails/>} />
      </Routes>

    </div>

  );
}

export default App;
