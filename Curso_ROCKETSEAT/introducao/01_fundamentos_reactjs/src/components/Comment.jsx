import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
    return(
        <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://github.com/JhonatanBS.png" alt="" />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Jhonatan Bezerra</strong>
                  <time title="07 de Julho ás 17:00" dateTime="2022-07-01 19:00:30">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar comentário">
                   <Trash size={24} /> 
                </button>
              </header>

              <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
          </div>
        </div>
    )
}