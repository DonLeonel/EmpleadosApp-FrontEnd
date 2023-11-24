import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  })

  const { data, error, loading } = state;

  const fetchData = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setState({
        data,
        loading: false,
        error: null
      })
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error
      })
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [url])

  //console.log(data)
  return { data, error, loading }
}