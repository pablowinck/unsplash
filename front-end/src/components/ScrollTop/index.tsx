import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import styles from './styles.module.scss'
const ScrollTop: React.FC = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const { body } = document

    const handleScroll = ({ target }: any) => {
      const scroll = target.scrollTop

      setShow(scroll >= 120)
    }
    body.addEventListener('scroll', handleScroll, false)
    return () => body.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    document.body.scrollTo({
      top: 0,
    })
  }

  if (!show) return null
  return (
    <div className={styles.icon} onClick={handleClick}>
      <BsFillArrowUpCircleFill />
    </div>
  )
}

export default ScrollTop
