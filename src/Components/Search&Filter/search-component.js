import React from 'react'
import { RegionContext } from '../../Context/region-context';
import {OutlinedInput,FormControl,InputAdornment} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useFetch } from '../../utils/country-data';
export function Search(){
  const [search,setSearch] = React.useState('')
  const {url,setUrl} = React.useContext(RegionContext)
  const [,loading] = useFetch(url)
  const handleChange = (e)=>{
    setSearch(e.target.value)
    if(search.length>=3){
      setUrl(`https://restcountries.com/v3.1/name/${search}`)
    }
    else {setUrl(`https://restcountries.com/v3.1/all`)}
  }
  
    return(
        <FormControl sx={{m:1, width: '45ch',
            bgcolor: "background.default",
            color: "text.primary",
        }}>
          <OutlinedInput
            value={search}
            onChange = {handleChange}
            sx={{height:'5ch',maxWidth:'330px'}}
            id="country-search"
            placeholder = 'Search for countries...'
            startAdornment=
            {<InputAdornment position="start">
                 <SearchOutlinedIcon/>    
            </InputAdornment>
            }
            endAdornment={
              loading?<InputAdornment position='end'><span style={{fontWeight:'bolder'}}>...</span></InputAdornment>:null
            }
            aria-describedby="search for countries"
            inputProps={{
              'aria-label': 'country-search',
            }}
          />
        
        </FormControl>
    )
}