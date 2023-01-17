import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Tabs from './components/Tabs';

function App() {
  

  return (
    <div className="App row">
      <Tabs content = {["Tab1 content showing", "Tab2 content showing", "Tab3 content showing"]}></Tabs>
    </div>
  );
}

export default App;
