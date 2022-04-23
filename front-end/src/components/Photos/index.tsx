import React from 'react'
import { Photo, size } from '../../hooks/photo'
import styles from './styles.module.scss'
type Props = {
  data: Photo[]
}

const Photos: React.FC<Props> = ({ data }) => {
  const divide = (value: Photo[]): Photo[][] => {
    var newData = []
    var i = 0
    const toDivide = size / 3
    while (i < value.length) {
      newData.push(value.slice(i, i + toDivide))
      i += toDivide
    }
    return newData
  }
  return (
    <div className={styles.container}>
      {divide(data).map((item, index) => (
        <div className={styles.container__column} key={index}>
          {item.map(({ label, url }, index) => (
            <div
              className={styles.container__item}
              style={{
                backgroundImage: `url(${url})`,
                height: `${Math.random() * (600 - 250) + 250}px`,
              }}
              key={label + index}
            >
              <p>{label}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Photos
