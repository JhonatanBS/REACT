import './App.css';
import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';

function App() {
  const [userName] = useState("Pedro");

  return (
    <div className="App">
      <h1>Avançando em REACT</h1>
      {/* Imagem do public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem do src*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/>
    </div>
  );
}

export default App;
