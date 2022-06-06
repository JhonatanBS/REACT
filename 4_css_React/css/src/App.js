import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react";
import Title from './components/Title';

function App() {
  const valor = 15;
  const [title] = useState(false);

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>css do React</h1>
      {/* CSS de componentes */}
      <MyComponent/>
      <p>Este componente pertence ao App.css</p>
      {/* CSS inline*/}
      <p style={{color:"white", padding:"20px",fontSize:"25px"}}>
        Este é o estilo inline
      </p>
      {/* CSS inline dinâmico */}
      <p style={valor <= 15 ? {color:"blue",backgroundColor:"#2424"} : {color:"red"}}>
        Este é um estilo inline Dinâmico
      </p>
      {/* Classe Dinâmica */}
      <p className={title ? "title-red" : "title-blue"}>
        Isso é uma classe dinâmica
      </p>
      {/* CSS module*/}
      <Title/>
      <h2 className="title_success">Meu Modulo CSS</h2>
    </div>
  );
}

export default App;
