import * as React from 'react'
import {styled} from '@mui/material/styles'
import {Box,Button} from '@mui/material'
import { green } from '@mui/material/colors'
// import { useFetch } from '../../utils/country-data'
import { Link } from 'react-router-dom'
export default function LoadingError({errType}){
    // const history = useHistory()
    const StyledH3 = styled('h3')(({theme})=>({
        color:theme.palette.text.primary,
        backgroundColor:theme.palette.background.default,
        textAlign:'center'
        }))
    return(
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           
           <StyledH3>{`Error:${errType} And`}</StyledH3>
            <Button sx={{height:"30px",ml:"8px",backgroundColor:green[500]}}
                    onClick={()=>{window.location.reload(true)}}
            >Retry</Button>
        </Box>
      )
}