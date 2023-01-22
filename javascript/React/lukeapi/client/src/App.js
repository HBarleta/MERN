
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import StarWars from './components/StarWars';
import {Routes, Route} from 'react-router-dom'
import SearchResults from './components/SearchResults';
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayError from './components/DisplayError';

function App() {
  return (
    <div className="App">
      <div>

     <StarWars/>
      <Routes>
        <Route path="results/:search/:id" element={<SearchResults></SearchResults>} />
        {/* this route utilizes useParams to pass in search and id variables to be used in the axios call in the results page */}
        <Route path="displayerror" element ={<DisplayError></DisplayError>} />
        {/* ** REMINDER ** always remember to wrap component in carrots to load properly!! */}
      </Routes>
     
      </div>
    </div>
  );
}

export default App;
