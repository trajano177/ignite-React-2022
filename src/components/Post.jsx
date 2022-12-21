import styles from "./Post.module.css";
import foto from "../assets/imagem-perfil.jpg";
import { Placeholder } from "phosphor-react";
import { Comment } from "./Comment";
import { Avatar } from "./avatar";

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/trajano177.png" />

          <div className={styles.authorInfo}>
            <strong>Matheus Trajano</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="22 de novembro de 2022" dateTime="2022-11-22 20:27">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>

        <p>
          {" "}
          Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          {" "}
          👉 <a href=""> jane.design/doctorcare </a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        placeholder="Deixe seu comentário" 
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
  );
}
