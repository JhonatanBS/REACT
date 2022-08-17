import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";

import {PlusCircle} from "phosphor-react";

export function App() {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <form>
          <input type="text" placeholder="Adicione uma nova tarefa"/>
          <button type="submit">
            Criar
            <PlusCircle size={20}/>
          </button>
        </form>
      </main>
    </>
  )
}
