import React, { useState } from 'react'
import { useAddPhoto } from '../../hooks/photo'
import styles from './styles.module.scss'
type Props = {
  close: () => void
}

const AddPhoto: React.FC<Props> = ({ close }) => {
  const [addTodo, { loading }] = useAddPhoto()

  //!TODO #1 add validation
  const [label, setLabel] = useState('')
  const [url, setUrl] = useState('')

  return (
    <>
      <div className={styles.overlay} onClick={close}></div>
      <div className={styles.container}>
        <p className={styles.container__title}>Add a new photo</p>

        <form
          onSubmit={() => {
            addTodo({ variables: { photo: { label, url } } })
          }}
          className={styles.container__form}
        >
          <label htmlFor="label">Label</label>
          <input
            placeholder="Suspendisse elit massa"
            type="text"
            name="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <label htmlFor="label">Photo URL</label>
          <input
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
            type="text"
            name="label"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className={styles.container__buttons}>
            <button
              className={styles.button__cancel}
              type="button"
              onClick={close}
            >
              Cancel
            </button>
            <button className={styles.button__submit}>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddPhoto
