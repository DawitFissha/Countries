import * as React from 'react'
import { useFetch } from '../../utils/country-data'
import Button from '@mui/material/Button'
import {Box} from '@mui/material'
import { useHistory } from 'react-router'
import {StyledP} from '../StyledComponents/styledp'
export function BorderCountry({borders}){
   if(borders){
    return (
      <Box sx={{mt:5,display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
      <Box sx={{alignSelf:'center'}}>
      <StyledP>Border Countries:</StyledP>
      </Box>
      <Box sx={{display:'flex',flexWrap:'wrap'}}>
        
      {
      borders.map((border,id)=>(
        <Box sx={{ml:1,mt:1}} key = {id.toString()}>
          <Borders ccode={border}/>
        </Box>
      ))
      }
    
    
      </Box>
    </Box>
    
    )
   }
   else return <h3 style={{color:'red'}}>Border Countries Unavailable <span>&#128542;</span></h3>
}
 function Borders({ccode}){
    const [data,loading] = useFetch(`https://restcountries.com/v3.1/alpha/${ccode}`)
    const history = useHistory()
  if(!loading){
    return(
        <Button
        onClick={()=>{history.push(`/${data[0].name.common}`)}}
        >
            {data[0].name.common}           
        </Button>
    )
  }
  else return null
}