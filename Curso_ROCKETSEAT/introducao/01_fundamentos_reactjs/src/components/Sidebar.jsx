import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar(){
    return(
        <aside className={styles.sidebar }>
          <img 
             className={styles.cover} 
             src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50" alt="" 
             />
        
          <div className={styles.profile}>
            <Avatar src="https://github.com/JhonatanBS.png"/>

            <strong>Jhonatan Bezerra</strong>
            <span>Web Developer</span>
          </div>

          <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
          </footer>
        </aside>
    )
}