import { Header } from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  
  return (
    
    <div>
      <Header/>
      <Post 
        author="Jhonatan" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem explicabo sed nobis neque ducimus nulla architecto eius ipsam facilis rerum eos fuga, eligendi veritatis. Quaerat, dolor. Ad doloribus velit quasi!"
      />

      <Post 
        author="Tiago" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem explicabo sed nobis neque ducimus nulla architecto eius ipsam facilis rerum eos fuga, eligendi veritatis. Quaerat, dolor. Ad doloribus velit quasi!"
      />
      
    </div>
  )
}


