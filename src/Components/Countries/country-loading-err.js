import * as React from 'react'
import {styled} from '@mui/material/styles'
export default function LoadingError({errType}){
    const StyledH3 = styled('h3')(({theme})=>({
        color:theme.palette.text.primary,
        backgroundColor:theme.palette.background.default,
        textAlign:'center'
        }))
    return(
        <StyledH3 style={{textAlign:'center'}}>{`Error:${errType}`}</StyledH3>
      )
}