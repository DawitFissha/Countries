import * as React from 'react'
import {IconButton,Box} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {ThemeToogleContext} from '../../Context/theme-toogle-context'
export const ChangeThemeButton = ()=>{
    const theme = useTheme()
    const colorMode = React.useContext(ThemeToogleContext)
    return(
       <Box
       sx={{background:'background.default',display:'flex',alignItems:'center'}}
       >
         
        <IconButton sx={{ ml: 1/3 }} onClick={colorMode.toogleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <h5>{theme.palette.mode==='light'?'Dark':'Light'} Mode</h5>
       </Box>
    )
}