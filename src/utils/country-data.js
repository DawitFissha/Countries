import * as React from 'react'
export function useFetch(resource){
    const [err,setErr] = React.useState({error:false,errType:''})
    const [data,setData] = React.useState([])
    const [loading,setLoading] = React.useState(true)
    React.useEffect(() => {
      async function getCountryData(){
        const timeout = 10000;
        const controller = new AbortController()
        const id = setTimeout(()=>{
          controller.abort()
          setLoading(false)
          setErr({error:true,errType:'Network timeout Please Check your connection'})
          
        },timeout)
        const response = await fetch(resource,{signal:controller.signal})
        // if(!response.ok){
        //   const message = `Fetching Failed ${response.status}`
        //   console.log(message)
        //   throw new Error(message)
          
        // }
        clearTimeout(id)
        const country_data = await response.json()
        return country_data;
      }
      getCountryData()
      .then(country_data=>{
        //setLoading(true)
        setData(country_data)
        setLoading(false)
      })
      .catch(er=>{
        setErr({error:true,errType:er})
      })
     }, [resource]);
      return [data,loading,err]
}