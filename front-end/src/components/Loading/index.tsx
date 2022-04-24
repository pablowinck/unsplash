import React from 'react'
import styles from './styles.module.scss'
const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/loading.svg" alt="Loading Icon" />
    </div>
  )
}

export default Loading
