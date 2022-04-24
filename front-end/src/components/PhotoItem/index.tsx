import React, { useState } from 'react'
import { Photo } from '../../hooks/photo'
import styles from './styles.module.scss'
type Props = {
  photo: Photo
}

const PhotoItem: React.FC<Props> = ({ photo }) => {
  const [load, setLoad] = useState(false)
  const { label, url } = photo

  return (
    <div
      className={styles.container}
      style={{
        height: `${Math.random() * (600 - 250) + 250}px`,
      }}
    >
      <p>{label}</p>
      {!load && (
        <div className={styles.loading}>
          <img
            src={'/loading.svg'}
            alt={'Load Image'}
            className={styles.loading__image}
          />
        </div>
      )}
      <img src={url} alt={'Image'} onLoad={() => setLoad(true)} />
    </div>
  )
}

export default PhotoItem
