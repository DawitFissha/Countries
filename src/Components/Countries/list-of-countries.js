import React,{Suspense} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Country} from './country'
import {CountryLoading} from './country-loading'
import {useFetch} from '../../utils/country-data'
import { RegionContext } from '../../Context/region-context';
const LoadingError = React.lazy(()=>import('./country-loading-err'))
export function Countries() {
const {region,url,setUrl} = React.useContext(RegionContext)
const [data,loading,err] = useFetch(url)

if(region===''){
  setUrl('https://restcountries.com/v3.1/all')
}
else setUrl(`https://restcountries.com/v3.1/region/${region}`)

       if(loading){
       return(
        <CountryLoading/>
       );
         }
         else if(err.error){
          return(
            <Suspense fallback={<div>Loading...</div>}>
              <LoadingError errType = {err.errType}/>
            </Suspense>
          )
         }
       return (
        <Box sx={{ flexGrow: 1,mt:2}}>
          <Grid container spacing={2}>
            {
                 data.map((country_data)=>(
                    <Grid item xsm={12} sm={12} md={3} key={country_data.name.common}>
                    <Country 
                    flag={country_data.flags.png}
                    name={country_data.name.official}
                    population={country_data.population}
                    region={country_data.region}
                    capital={country_data.capital}
                    />
                  </Grid>
                ))
                
            }
          </Grid>
        </Box>
      );
      
}
