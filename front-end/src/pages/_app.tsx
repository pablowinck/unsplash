import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'
import SearchContextProvider from '../context/SearchContext'
import '../styles/global.scss'

const client = new ApolloClient({
  uri: process.env.API_URL || 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </ApolloProvider>
  )
}

export default MyApp
