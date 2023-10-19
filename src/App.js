import './App.css';
import Mensaje from './Mensaje';

function App() {
  return (
    <div className="App">
     <Mensaje color='red' menssage='Estamos codificando'/>
      <Mensaje color='yellow' menssage='en un curso'/>
      <Mensaje color='blue' menssage='de React'/>
      <Mensaje color='green' menssage='free'/>
      <Mensaje color='black' menssage='ok'/>
    </div>
  );
}

export default App;
