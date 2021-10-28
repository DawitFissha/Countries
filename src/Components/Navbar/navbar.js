import {Box} from '@mui/material'
import {ChangeThemeButton} from './changeTheme'
export const Navbar = ()=>{
    return(
        <div style = {{width:'100%'}}>
            <Box
        sx={{
            display: "flex",
            height:43,
            alignItems:'center',
            justifyContent:'space-around',
            bgcolor: "background.default",
            color: "text.primary",
            p: 1,
            borderBottom:`1px solid #bdbdbd`
        }}
        >
            
            <Box sx={{flexGrow:2}}><h4>Where in the world ? </h4></Box>
            <ChangeThemeButton/>
            
            
        </Box>
        </div>
    )
}