import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'


type Author = {
  name: string
  avatarUrl: string
  role: string
}

type Content = {
  type: string,
  content: string
}

type PostProps = {
  post: {
    publishedAt: Date,
    content: Content[],
    author: Author
  }
}

export function Post({ post }: PostProps) {

  const [comments, setComments] = useState(['post muito bacana hem!!'])
  const [newCommentText, setNewCommentText] = useState('')
  const isNewCOmmentEmpty = newCommentText.trim().length === 0

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true,
    locale: ptBr
  })

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function handleNewCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
  }

  function deleteComment(comment: string) {
    const commentsWithoutDeleted = comments.filter(c => c !== comment)
    setComments(commentsWithoutDeleted)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}> <a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          value={newCommentText}
          onChange={handleNewCommentTextChange}
          placeholder='Deixe um comentario'
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCOmmentEmpty}>
            Publicar
          </button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} comment={comment} onDeleteComment={deleteComment} />
        ))}
      </div>

    </article>
  )
}
