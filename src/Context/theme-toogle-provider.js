
import {ThemeProvider, createTheme } from '@mui/material/styles';
import {ThemeToogleContext} from '../Context/theme-toogle-context'
import { Navbar } from '../Components/Navbar/navbar';
import React,{Suspense} from 'react'
import {getDesignTokens} from '../Styles/theme'
import {
  BrowserRouter as Router,
  Switch,Route
} from 'react-router-dom'
const CountryDetail = React.lazy(()=>import('../Components/Countries/country-detail'))
const Region = React.lazy(()=>import('./region-context-provider'))
export function ToogleTheme(){
    const [mode,setMode] = React.useState('light')
    const colorMode = React.useMemo(
        () => ({
            toogleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
          },
        }),
        [],
      );    
      const theme = React.useMemo(
        () =>
        createTheme(getDesignTokens(mode)),
        [mode],
      );
        React.useEffect(()=>{
          document.body.style.background = theme.palette.background.default
        },[theme])
      return(
        <ThemeProvider theme = {theme}>
        <ThemeToogleContext.Provider value = {colorMode}>
            
            <Router>    
                <Navbar/>
                <div>
                    <Suspense fallback = {<div>Loading...</div>}>
                    <Switch>
                      <Route path='/:name' children = {<CountryDetail/>}/>
                      <Route exact path='/' children = {<Region/>}/>
                    </Switch>
                    </Suspense>
                </div>
                </Router>         
            
        </ThemeToogleContext.Provider>
        </ThemeProvider>
      )
    
}