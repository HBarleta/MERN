
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import { useState } from 'react';
import FetchAPI from './components/FetchAPI';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages")
  const youveGotMail = ( newMessage )  => {
    setCurrentMsg(newMessage);
  }
  return (
    <div>
      <MessageForm onNewMessage={ youveGotMail} />
      <MessageDisplay message={ currentMsg }/>
      <FetchAPI></FetchAPI>
    </div>
  );
}

export default App;
