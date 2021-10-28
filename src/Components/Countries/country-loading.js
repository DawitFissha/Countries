import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles'
export  function CountryLoading() {
const StyledH3 = styled('h3')(({theme})=>({
color:theme.palette.text.primary,
backgroundColor:theme.palette.background.default,
textAlign:'center'
}))
  return (
    <>
    <StyledH3
    >Loading for countries please wait...</StyledH3>
      <Box sx={{width:'100%'}}>
        <LinearProgress color='success'/>
      </Box>
     </>
  );
}