import {styled} from '@mui/material/styles'
export function StyledP({children}){
    const Newp = styled('p')(({theme})=>({
    color:theme.palette.text.primary,
    backgroundColor:theme.palette.background.default,
    fontSize:'14px',
    fontWeight:'bold'

}))
return (
<Newp>{children}</Newp>
)
}