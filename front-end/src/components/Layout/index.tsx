import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSearchContext } from '../../context/SearchContext'
import AddPhoto from '../AddPhoto'
import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const { search, setSearch } = useSearchContext()
  return (
    <div className={styles.container}>
      {open && <AddPhoto close={() => setOpen(false)} />}
      <div className={styles.header}>
        <div>
          <Image src="/favicon.svg" height={120} width={120} alt="Logo" />
          <div className={styles.header__searchbar}>
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <button onClick={() => setOpen(true)}>Add Photo</button>
      </div>
      <div className="">{children}</div>
    </div>
  )
}

export default Layout
