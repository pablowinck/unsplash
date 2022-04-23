import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import AddPhoto from '../AddPhoto'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
      {open && <AddPhoto close={() => setOpen(false)} />}
      <div className={styles.header}>
        <div>
          <Image src="/favicon.svg" height={100} width={100} alt="Logo" />
          <div className={styles.header__searchbar}>
            <AiOutlineSearch />
            <input type="text" placeholder="Search by name" />
          </div>
        </div>
        <button onClick={() => setOpen(true)}>Add Photo</button>
      </div>
      <div className="">{children}</div>
    </div>
  )
}

export default Layout
