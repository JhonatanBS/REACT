// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// CSS
import './App.css';

function App() {
  // Comentário de apenas uma linha
  /*
     Comentário de multiplas linhas
  */
  return (
    <div className="App">
      {/* Comentário do JSX*/}
      <h1>Components</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  );
}

export default App;
