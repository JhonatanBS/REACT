import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import clipboard from "./assets/img/Clipboard.svg";

import {PlusCircle, ClipboardText} from "phosphor-react";
import { useState } from "react";
import { Todo } from "./components/Todo";

export function App() {
  const [todo, setTodo] = useState([]);
  console.log(todo, setTodo)
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

        <div className={styles.todoList}>
          <div className={styles.setupCount}>
            <div>
              <p>Tarefas criadas</p>
              <div className={styles.number}>{0}</div>
            </div>

            <div>
              <p>Concluídas</p>
              <div className={styles.number}>{0}</div>
            </div>
          </div>
          
          <div className={styles.center}>
            {todo.length === 0 ? (
              <>
                <div>
                  <img src={clipboard} alt="" />
                </div>

                <div>
                   <p>Você ainda não tem tarefas cadastradas</p>
                   <p>Crie tarefas e organize seus itens a fazer</p>
                </div>

              </>
            ) : (
              <Todo />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
