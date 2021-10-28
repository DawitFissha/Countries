import * as React from 'react'
import { RegionContext } from './region-context'
import { FilterBar } from '../Components/Search&Filter/filterbar'
import { Countries } from '../Components/Countries/list-of-countries'
export default function Region() {
React.useEffect(()=>{document.title='Countries'})
const [region,setRegion] = React.useState('')
const [url,setUrl] = React.useState(`https://restcountries.com/v3.1/all`)
const value = React.useMemo(()=>({region,setRegion,url,setUrl}),
[region,url])
    return(
        <RegionContext.Provider value = {value}>
            <FilterBar/>
            <Countries/>
        </RegionContext.Provider>
    )
}