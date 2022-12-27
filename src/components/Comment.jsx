import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./avatar";
import styles from "./Comment.module.css";

export function Comment({content, onDeleteComment}) {
  function handleDeleteComment() {

    onDeleteComment(content);
  }
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

                <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size={24} />
                </button>
            </header>

           <p>{content}</p>
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
