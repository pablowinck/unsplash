import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Layout from '../components/Layout'
import Photos from '../components/Photos'
import { useFetchPhotos } from '../hooks/photo'

const Home: NextPage = () => {
  const [position, setPosition] = useState(0)
  const { data, loading } = useFetchPhotos({ position })

  return (
    <div>
      <Head>
        <title>Unsplash</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <Layout>
          <Photos data={data.photos} />
        </Layout>
      )}
    </div>
  )
}

export default Home
