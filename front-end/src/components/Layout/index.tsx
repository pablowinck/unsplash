import Image from 'next/image'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <Image src="/favicon.svg" height={100} width={100} alt="Logo" />
          <div className={styles.header__searchbar}>
            <AiOutlineSearch />
            <input type="text" placeholder="Search by name" />
          </div>
        </div>
        <button>Add Photo</button>
      </div>
      <div className="">{children}</div>
    </div>
  )
}

export default Layout
