import './App.css';
import City from "./assets/city.jpg";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import DogDetails from './components/DogDetails';

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
      {/* Props*/}
      <ShowUserName name={userName}/>
      {/* Destruturação*/}
      <DogDetails name="Nina" breed="Golden" color="Amarelo" kg={40} newDog={true}/>
      {/* Reaproveitamento de componentes */}
      <DogDetails name="Beto" breed="Shitzu" color="Branco" kg={15} newDog={false}/>
      <DogDetails name="Paçoca" breed="Pinscher" color="Preto" kg={12} newDog={false}/>
      <DogDetails name="Laka" breed="Husky" color="Amarelo" kg={35} newDog={true}/>
    </div>
  );
}

export default App;
