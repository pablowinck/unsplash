import React, { createContext, ReactNode, useContext, useState } from 'react'

type SearchContextType = {
  search: string
  setSearch: (value: string) => void
}

const SearchContext = createContext({} as SearchContextType)

type Props = {
  children: ReactNode
}

const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [search, setSearch] = useState<string>('')

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatContextProvider')
  }
  return context
}

export default SearchContextProvider
