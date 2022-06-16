import { Headers } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div>
      <Headers />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Postes
        </main>
      </div>
    </div>
  )
}

export default App
