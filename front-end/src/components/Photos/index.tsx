import React from 'react'
import { Photo } from '../../hooks/photo'
import useMedia from '../../hooks/use-media'
import PhotoItem from '../PhotoItem'
import styles from './styles.module.scss'
type Props = {
  data: Photo[]
}

const Photos: React.FC<Props> = ({ data }) => {
  const columns = useMedia(
    ['(min-width: 1400px)', '(min-width: 923px)', '(max-width: 922px)'],
    [3, 2, 1],
    3
  )

  const divide = (value: Photo[]): Photo[][] => {
    var newData = []
    var i = 0

    const toDivide = Math.round(data.length / columns)
    while (i < value.length) {
      newData.push(value.slice(i, i + toDivide))
      i += toDivide
    }
    return newData
  }
  return (
    <div className={styles.container} id="photos">
      {divide(data).map((item, index) => (
        <div className={styles.container__column} key={index}>
          {item.map((photo, index) => (
            <PhotoItem photo={photo} key={photo.label + index} />
          ))}
        </div>
      ))}
    </div>
  )
}
export default Photos
