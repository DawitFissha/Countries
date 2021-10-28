import Box from '@mui/material/Box';
import {Search} from './search-component'
import { Filter } from './filter-component';
import {useTheme} from '@mui/material/styles'
import { useMediaQuery } from '@mui/material';
export function FilterBar(){
const theme = useTheme()
const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Box
        sx={{
            display: "flex",
            flexDirection:matches?'column':'row',
            // alignItems:'center',
            // justifyContent:'space-around',
            p: 1,
        }}
        >
            <Box sx={{flexGrow:2}}>
                <Search/>
            </Box>
            <Box>
                <Filter/>
                {/* <h3>test</h3> */}
            </Box>
        </Box>
    )
}