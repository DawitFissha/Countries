
export const getDesignTokens = (mode)=>({
palette:{
    mode,
    ...(mode==='light'
        ?
        {
            primary: {
                main:'#ffffff'
            },
            text:{
                primary: '#111517',
                
            },
            background:{
                default:'hsl(0, 0%, 98%)'
            }
        }
        :
        {
            primary: {
                main:'#00000'
            },
            background:{
                default:'hsl(207, 26%, 17%)'
            },
            text:{
            primary: '#ffff',  // light mode elements
            secondary: '#ffff',
            }
        }
    )
},
components:{
    MuiButton:{
       styleOverrides:{
           root:{
               fontSize:'12px',
               textTransform:'none'
           }
       },
       defaultProps:{
        variant:'contained',
        size:'small'
        
       }
    },
    MuiButtonBase:{
        defaultProps:{
            disableRipple:true,
            
        }
    },
    MuiFormControl:{
        defaultProps:{
            variant:'outlined'
        }
    }
}
})

