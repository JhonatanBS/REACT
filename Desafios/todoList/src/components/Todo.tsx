import { Trash } from "phosphor-react";
import { Itodo } from "../App";
import styles from "./Todo.module.css";

interface IPropsTodo {
  propsTodo: Itodo;
  deleteTodo(todoDelete: Itodo): void;
  alterDone(alter: Itodo): void;
}

export function Todo({propsTodo, deleteTodo ,alterDone}: IPropsTodo) {
 
  function deleteTodoOnClick(): void {
    deleteTodo(propsTodo);
  }

  function alterTodo():void {
    alterDone(propsTodo);
  }

  return(
        <div className={styles.container}>
          <input 
            type="checkbox" 
            id={propsTodo.id}
            checked={propsTodo.done} 
            onClick={alterTodo}
            />
          <label htmlFor={propsTodo.id} className={propsTodo.done === true ? styles.scratch : ""}>{propsTodo.description}</label>  
          <button className={styles.delete} onClick={deleteTodoOnClick}>
           <Trash size={20} />
          </button>
        </div>
  )
}