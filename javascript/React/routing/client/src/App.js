import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom'
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
     <NavBar/>
     {/* navbar will remain in all routes */}
    <Routes>
      {/* Routes tag will have a list of routes with Route tag */}
      <Route path="/" element={<h1>Welcome To Our Website</h1>} />
      {/* Route tag will point to the path to where it will be routed to  */}
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/players" element={<h1>This is the players page</h1>} />
      <Route path="/teams/:city/:color" element={<Teams/>} />
      {/* this Route for teams/:city will utilize useParams and will be passed down to the teams component via useParams*/}
    </Routes>

    </div>
  );
}

export default App;
