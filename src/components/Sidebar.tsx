import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

const cover = 'https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
const imageProfile = 'https://avatars.githubusercontent.com/u/5342280?v=4'


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={cover} className={styles.cover} />

      <div className={styles.profile}>
        <Avatar src={imageProfile} />
        <strong>Luan Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}
