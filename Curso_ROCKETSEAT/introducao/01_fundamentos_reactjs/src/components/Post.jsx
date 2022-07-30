import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post(props){
   console.log(props)
    return (
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
              <Avatar src="https://github.com/diego3g.png"/>
              <div className={styles.authorInfo}>
                <strong>Jhonatan Bezerra</strong>
                <span>Web Developer</span>
              </div>
            </div>

            <time title="07 de Julho ás 17:00" dateTime="2022-07-01 19:00:30">Publicado há 1h</time>
          </header>

          <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">👉 jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
          </div>

          <form className={styles.commentForm}>
             <strong>Deixe seu comentário</strong>

             <textarea 
               placeholder="Deixe um comentário"
             />

             <footer>
               <button type="submit">Publicar</button>
             </footer>
          </form>

          <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
          </div>
        </article>
    )
}
