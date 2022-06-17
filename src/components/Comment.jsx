import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import React from 'react'
import styles from './Comment.module.css'

const imageProfile = 'https://avatars.githubusercontent.com/u/5342280?v=4'

export function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={imageProfile} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luan Lima</strong>
              <time title='16 de Junho as 08:13h' dateTime='2022-06-16 08:13:30'>Cerca de 1h atras</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>

  )
}
