import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css"


export function App() {
  
  return (
    
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        
        <main>
          <Post 
            author="Jhonatan" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem explicabo sed nobis neque ducimus nulla architecto eius ipsam facilis rerum eos fuga, eligendi veritatis. Quaerat, dolor. Ad doloribus velit quasi!"
            />

            <Post 
            author="Tiago" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem explicabo sed nobis neque ducimus nulla architecto eius ipsam facilis rerum eos fuga, eligendi veritatis. Quaerat, dolor. Ad doloribus velit quasi!"
            />
          </main>
      </div>
      
    </div>
  )
}


