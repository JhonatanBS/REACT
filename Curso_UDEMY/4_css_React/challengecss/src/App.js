import './App.css';
import DetailsCar from './components/DetailsCar';

function App() {

  const cars = [
    {id:1, image:"https://garagem360.com.br/wp-content/uploads/2022/06/ff6139a9-4fd3-48cb-aaf0-601e03c17018.jpg",model:"Gol", brand:"Volkswagen", color: "white"},
    {id:2, image:"https://cdn.autopapo.com.br/box/uploads/2019/06/03143212/fiat-uno-attractive-2020.jpg",model:"Uno", brand:"Fiat", color: "red"},
    {id:3, image:"https://2.bp.blogspot.com/-cR1W_RuWpgQ/XGHsRKl-BuI/AAAAAAAASYQ/ngXOTh9DzxY-KmCyJKEOJ1Uf0hqmLHxPgCLcBGAs/s1600/Ford-Fusion-2019%2B%25283%2529.jpg",model:"Fusion", brand:"Ford", color: "silver"},
  ]
  return (
    <div className="App">
      <h1 className="title">Detalhes dos carros</h1>
      <DetailsCar carDetail={cars}/>
    </div>
  );
}

export default App;
