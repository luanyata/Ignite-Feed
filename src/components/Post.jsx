import React from 'react'
import { Comment } from './Comment'
import styles from './Post.module.css'

const imageProfile = 'https://avatars.githubusercontent.com/u/5342280?v=4'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={imageProfile} />
          <div className={styles.authorInfo}>
            <strong>Luan Lima</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='16 de Junho as 08:13h' dateTime='2022-06-16 08:13:30'>Publicado 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>  👉 <a href="">jane.design/doctorcare</a> </p>

        <p> <a href=""> #novoprojeto</a> <a href="">#nlw</a>  <a href="">#rocketseat</a>  </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentario' />

        <footer>
          <button type="submit">
            Publicar
          </button>
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
