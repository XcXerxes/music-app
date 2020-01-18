import { useEffect, useState } from 'react'

export const useFetch = (apiMethod: any, _: any = {}) => {
  const [state, setstate] = useState({ loading: true, data: {}, count: 0 })
  useEffect(() => {
    async function fetch () {
      try {
        const result = await apiMethod({limit: _.limit || 10 })
        setstate(cState => ({ ...cState, loading: false}))
        if (result.ok && result.data.code === 200) {
          setstate(cState => ({ ...cState, data: result.data }))
        }
      } catch (error) {
        console.error(error)
        setstate(cState => ({ ...cState, loading: false}))
      }
    }
    fetch ()
  }, [apiMethod, setstate])
  return state
}
