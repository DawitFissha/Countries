import * as React from 'react'
import {Box,Button} from '@mui/material'
import {styled} from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles';
import {useParams,useHistory} from 'react-router-dom'
import { useFetch } from '../../utils/country-data';
import { CountryLoading } from './country-loading';
import {BorderCountry} from './border-country'
import {StyledP} from '../StyledComponents/styledp'
import ErrorBoundary from '../error-boundary'
import {useTheme} from '@mui/material/styles'
import { useMediaQuery } from '@mui/material';

export default function CountryDetail(){
const theme = useTheme()
const matches = useMediaQuery(theme.breakpoints.down('md'));
const StyledH2 = styled('h2')(({theme})=>({
    color:theme.palette.text.primary,
    backgroundColor:theme.palette.background.default,
}))
const {name} = useParams()
const history = useHistory()
 const [data,loading] = useFetch(`https://restcountries.com/v3.1/name/${name}`)
const ObjToArray = (objs)=>{
    let NewArray = []
    for (let obj in objs){
        NewArray.push(objs[obj])
    }
    return NewArray
 }
 React.useEffect(()=>{
     document.title = name
 },[name])

    if(loading) {
    return (<CountryLoading countryName = {name}/>)
}
   else {
    return(
        <>
           <GlobalStyles
            styles={{span:{fontWeight:'lighter'}}}
            />
        <Box sx={{m:5}}>

              <Button sx={{width:'8%',textAlign:'center'}}
                    onClick = {()=>{history.push('/')}}
            ><span>&#8592;</span> Back</Button>

         <Box sx={{display:'flex',flexDirection:matches?'column':'row'}}>
         <Box sx={{mt:3}}>
                <img alt='flag of a country' src={data[0].flags.png}
                    width = '310px'
                    height = '230px'
                ></img>
            </Box>
            <Box sx={{ml:matches?0:10,mt:matches?2:4}}>
                <Box><StyledH2>{data[0].name.common}</StyledH2></Box>
                <Box sx={{display:'flex',flexDirection:matches?'column':'row'}}>
                <Box >
                <StyledP>Native Name:  
                    <span>   {ObjToArray(data[0].name.nativeName)[0].common}</span>
                    
                    </StyledP>
                <StyledP>Population: {<span>{data[0].population}</span>}</StyledP>
                <StyledP>Region: {<span>{data[0].region}</span>}</StyledP>
                <StyledP>Sub Region: {<span>{data[0].subregion}</span>}</StyledP>
                <StyledP>Capital: {<span>{data[0].capital}</span>}</StyledP>
                </Box>
                <Box sx={{ml:matches?0:10}}>
                <StyledP>Top Level Domian {<span>{data[0].tld}</span>}</StyledP>
                <StyledP>Currency: {
                    ObjToArray(data[0].currencies).map((c,i)=>(
                        <span key={i}>{c.name} {`(${c.symbol})`},</span>
                    ))
                    }</StyledP>
                <StyledP>Languages: {
                    ObjToArray(data[0].languages).map((l,i)=>(
                        <span key={i}>{l},</span>
                        ))
                    }</StyledP>

                </Box>
                  </Box>
                <ErrorBoundary>
             <div style={{width:'100%'}}>
                
                <BorderCountry borders = {data[0].borders}/>
                
               </div>         
               </ErrorBoundary>
            </Box>
         </Box>
        </Box>
        </>
    )
   }
  
}