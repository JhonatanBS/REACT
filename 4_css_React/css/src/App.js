import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>css do React</h1>
      {/* CSS de componentes */}
      <MyComponent/>
      <p>Este componente pertence ao App.css</p>
    </div>
  );
}

export default App;
