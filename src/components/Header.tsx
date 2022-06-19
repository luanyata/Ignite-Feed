import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Headers() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Feed Logo" />
    </header>
  )
}
