import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase'
// import InputLabel from '@mui/material/InputLabel';
import {styled} from '@mui/material/styles'
import { RegionContext } from '../../Context/region-context';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    // 'label + &': {
    //   marginTop: theme.spacing(1),  
    // },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.default,
      border: '1px solid #ced4da',
      fontSize: 14,
      padding: '10px 26px 10px 12px',
      //transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    //   '&:focus': {
    //     borderRadius: 4,
    //     borderColor: '#80bdff',
    //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    //   },
    },
  }));
export function Filter(){
    const {region,setRegion} = React.useContext(RegionContext)
    const handleChange = (e)=>{
        setRegion(e.target.value)
        }
    return(
        
            <FormControl sx={{m:1, width: '17ch',
        }}>
            {/* <InputLabel htmlFor="filter by region">Region</InputLabel> */}
                <Select 
                labelId = 'filter-countries-label'
                id='filter-countries'
                value={region}
                label='region'
                onChange = {handleChange}
                input = {<BootstrapInput/>}
                >
                    <MenuItem value='africa'>
                    Africa
                    </MenuItem>
                    <MenuItem value='america'>
                    America
                    </MenuItem>
                    <MenuItem value='asia'>
                    Asia
                    </MenuItem>
                    <MenuItem value='europe'>
                    Europe
                    </MenuItem>
                    <MenuItem value='oceania'>
                    Oceania
                    </MenuItem>

                </Select>
            </FormControl>
    )
}