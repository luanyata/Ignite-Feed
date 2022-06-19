import { Headers } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'


const posts = [
  {
    id: 1,
    author: {
      name: 'Luan Lima',
      avatarUrl: 'https://avatars.githubusercontent.com/u/5342280?v=4',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'luan/yata',
      }],
    publishedAt: new Date('2022-06-16 08:13:30'),
  },
  {
    id: 2,
    author: {
      name: 'Fernanda Lima',
      avatarUrl: 'https://github.com/fernandayata.png',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'fernanda/lima',
      }],
    publishedAt: new Date('2022-05-15 10:13:30'),
  }
]

function App() {
  return (
    <div>
      <Headers />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => <Post key={post.id} post={post} />)}
        </main>
      </div>
    </div>
  )
}

export default App
