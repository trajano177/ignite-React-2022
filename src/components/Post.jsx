import styles from './Post.module.css';
import foto from '../assets/imagem-perfil.jpg';

export function Post ()
{
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                <img src={foto} />
                
                <div className={styles.authorInfo}>
                    Web Developer
                </div>
                </div>

                <time title="22 de novembro de 2022" dateTime="2022-11-22 20:27">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p> Fala galeraa 👋</p>

            <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p> 👉 <a href=""> jane.design/doctorcare </a></p>

            <p> <a href=""> #novoprojeto #nlw #rocketseat </a></p>
            </div>

        </article>
    )
    }
    