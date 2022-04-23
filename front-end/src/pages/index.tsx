import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Unsplash</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Layout>Hello</Layout>
    </div>
  )
}

export default Home
