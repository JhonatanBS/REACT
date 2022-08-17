import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";

export function Todo({propsTodo, check}) {
  return(
        <div className={styles.container}>
          <input type="checkbox" id="todo" />
          <label htmlFor="todo">{propsTodo}</label>  
          <div>
           <Trash size={20} />
          </div>
        </div>
  )
}