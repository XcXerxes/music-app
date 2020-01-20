import { useEffect, useState } from 'react'
import { usePrevious } from './usePrevious'
import { equals } from 'ramda'

export const useFetch = (apiMethod: any, params: any = {}) => {
  const [state, setstate] = useState({ loading: true, data: {}, total: 0 })
  const myPreviousState = usePrevious(params)
  useEffect(() => {
    async function fetch () {
      try {
        const result = await apiMethod(params)
        setstate(cState => ({ ...cState, loading: false}))
        if (result.ok && result.data.code === 200) {
          setstate(cState => ({ ...cState, data: result.data, total: result.total }))
        }
      } catch (error) {
        console.error(error)
        setstate(cState => ({ ...cState, loading: false}))
      }
    }
    if (!equals(myPreviousState, params)) {
      fetch()
    }
  }, [apiMethod, myPreviousState, params, setstate])
  return state
}
