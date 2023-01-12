import logo from './logo.svg';
import './App.css';
import First from './components/first';

function App() {
  return (
    <div className="App">
      {/* <First firstName = "Hello Dojo!" lastName ="Barleta" number={21}> */}
      <First greeting = "Hello Dojo!" list = "Things I need to do">
          <p>* Learn React</p>
          <p>* Climb Mt. Everest</p>
          <p>* Run a marathon</p>
          <p>* Feed the dogs</p>
      </First>
    </div>
  );
}

export default App;
