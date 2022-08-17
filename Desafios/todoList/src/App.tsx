import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import clipboard from "./assets/img/Clipboard.svg";

import {PlusCircle, ClipboardText} from "phosphor-react";
import { FormEvent, ChangeEvent, useState } from "react";
import { Todo } from "./components/Todo";

export function App() {
  const [todos, setTodos] = useState(["Fazer café"]);
  const [newTodo, setNewTodo] = useState("");

  function handleTodoSubmit(event: FormEvent) {
    event.preventDefault();

    setTodos([...todos, newTodo]);
    
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLTextAreaElement>):void {
    event.target.setCustomValidity("");
    setNewTodo(event.target.value)
  }

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <form onSubmit={handleTodoSubmit}>
          <input 
            onChange={handleNewTodoChange}
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            className={styles.input}
            />
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
            {todos.length === 0 ? (
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
              <div>
                {todos.map( todo => {
                  return <Todo propsTodo={todo} check={false}/>
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
