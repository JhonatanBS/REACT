import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import clipboard from "./assets/img/Clipboard.svg";

import {PlusCircle} from "phosphor-react";
import { FormEvent, ChangeEvent, useState, InvalidEvent } from "react";
import { Todo } from "./components/Todo";

import { v4 as uuidV4 } from "uuid";

interface Itodo {
  id: string;
  description: string;
  done: boolean
}

export function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleTodoSubmit(event: FormEvent):void {
    event.preventDefault();

    const createdTodo: Itodo = {
      id: uuidV4(),
      description: newTodo,
      done: false,
    }

    setTodos([...todos ,createdTodo]);

  }

  function handleNewTodoChange(event: ChangeEvent<HTMLTextAreaElement>):void {
    event.target.setCustomValidity("");
    setNewTodo(event.target.value);
  }

  function handleDeleteTodo( todoDelete: Itodo ):void {
    const deleteTodo = todos.filter( todo => {
      return todo !== todoDelete
    });
    
    setTodos(deleteTodo);
  }

  function alterTodo(alter: Itodo):void {
    const alterDoneTodo = todos.map((todo) => {
      if(alter.id === todo.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(alterDoneTodo);
  }

  function counterTodoChecked(todoCounter: Itodo){
    const SumCheckedTodo = todos.reduce( (counter,todo) => {
      if(todo.done === true){
        counter++;
      }
      return counter;
    }, 0)

    return SumCheckedTodo;
  };

  function handlenewTodoInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const disableButtonEmptyTodo = newTodo.length === 0;

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
            required
            onInvalid={handlenewTodoInvalid}
            />
          <button 
            type="submit" 
            className={styles.add}
            disabled={disableButtonEmptyTodo}
            >
              
            Criar
            <PlusCircle size={20}/>
          </button>
        </form>

        <div className={styles.todoList}>
          <div className={styles.setupCount}>
            <div>
              <p>Tarefas criadas</p>
              <div className={styles.number}>{todos.length}</div>
            </div>

            <div>
              <p>Concluídas</p>
              <div className={styles.done}>{todos.length === 0 ? 0 : 
              (
                <>
                  {counterTodoChecked()} de {todos.length}
                </>
              )
              }</div>
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
              <div className={styles.todo}>
                {todos.map( todo => {
                  return <Todo key={todo.id} propsTodo={todo} deleteTodo={handleDeleteTodo} alterDone={alterTodo} />
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}