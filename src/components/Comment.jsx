import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.commnet}>
      <img src="https://github.com/mateuslouback.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Mateus Louback</strong>
                    <time title="22 de novembro de 2022" dateTime="2022-11-22 20:27">Cerca de 1h atrás</time>
                </div>

                <button title="Deletar comentário">
                    <Trash size={24} />
                </button>
            </header>

            <p>Muito bom Dev, parabéns!! 👏👏</p>
        </div>
      
        <footer>
           <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
           
           </button>  
        </footer>
      
      </div>



    </div>
  );
}
