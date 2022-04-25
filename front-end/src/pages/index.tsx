import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import Photos from '../components/Photos'
import ScrollTop from '../components/ScrollTop'
import { Photo, useFetchPhotos } from '../hooks/photo'

const Home: NextPage = () => {
  const [position, setPosition] = useState<number>(0)
  const [photos, setPhotos] = useState<Photo[]>([])
  const { data, loading } = useFetchPhotos({ position })

  useEffect(() => {
    console.log('photos', photos)
  }, [photos])

  useEffect(() => {
    if (data?.photos) {
      setPhotos((prev) => [...prev, ...data.photos])
    }
  }, [data])

  useEffect(() => {
    const { body } = document

    const handleScroll = ({ target }: any) => {
      const scroll = target.scrollTop
      const max = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )

      if (max - scroll <= 1100) {
        setPosition(position + 1)
      }
    }
    body.addEventListener('scroll', handleScroll, false)
    return () => body.removeEventListener('scroll', handleScroll)
  }, [position])

  return (
    <div>
      <Head>
        <title>Unsplash</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      {loading && <Loading />}
      <ScrollTop />
      <Layout>
        <Photos data={photos} />
      </Layout>
    </div>
  )
}

export default Home
