import { useCallback, useEffect, useState } from 'react'
// MediaQueryList
export default function useMedia(
  queries: string[],
  values: number[],
  defaultValue: number
) {
  const getMediaQueryLists = useCallback<() => MediaQueryList[]>(() => {
    if (typeof window === 'undefined') return []
    return queries.map((q) => window.matchMedia(q))
  }, [queries])

  const mediaQueryLists = getMediaQueryLists()
  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches)
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }, [defaultValue, mediaQueryLists, values])

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach((mql) => mql.addListener(handler))
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler))
  }, [getValue, mediaQueryLists])

  return value
}
