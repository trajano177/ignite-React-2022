import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.commnet}>
      <Avatar 
      hasBorder={false} 
      src="https://github.com/mateuslouback.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Mateus Louback</strong>
                    <time title="2022-12-22" dateTime="2022-11-22 20:27">Cerca de 1h atrás</time>
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
