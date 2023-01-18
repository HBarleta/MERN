import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Tabs from './components/Tabs';

function App() {
  

  return (
    <div className="App row">
      <Tabs content = {{tab1:"Tab1 content showing", tab2:"Tab2 content showing", tab3:"Tab3 content showing"}}></Tabs>
    </div>
  );
}

export default App;
