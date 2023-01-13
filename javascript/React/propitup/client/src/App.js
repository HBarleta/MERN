
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Doe, Jane" age={45} hairColor = "Black"></PersonCard>
      <PersonCard firstName = "Smith, John" age={88} hairColor = "Brown"></PersonCard>
      <PersonCard firstName = "Fillmore, Millard" age={50} hairColor = "Brown"></PersonCard>
      <PersonCard firstName = "Smith, Maria" age={62} hairColor = "Brown"></PersonCard>
    </div>
  );
}

export default App;
