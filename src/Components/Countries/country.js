import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useHistory } from 'react-router';
import { styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
const FlagCard = styled(Card)(({theme}) =>({
    margin:theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor:theme.palette.background.default,
    
  
})

)
export  function Country({flag,name,population,region,capital}) {
  const history = useHistory()
  return (
    <>
    <GlobalStyles
    styles={{p:{fontWeight:'bold'},span:{fontWeight:'lighter'},h3:{fontWeight:'bolder'}}}
    />
    <FlagCard sx={{ maxWidth: 345 }}>
      <CardActionArea
      onClick={()=>{
        history.push(`/${name}`)
      }}
      >
        <CardMedia
          component="img"
          height="140"
          image={flag}
          alt={`official flag of ${name} `}
        />
        <CardContent>  
        <h3>{name}</h3>
        <p>Population:{<span>{population}</span>}</p>
        <p>Region:{<span>{region}</span>}</p>
        <p>Capital:{<span>{capital}</span>}</p>
        </CardContent>
      </CardActionArea>
    </FlagCard>
    </>
  );
}
