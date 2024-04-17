import React from 'react'
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"

import { themeContext } from '../../../context'
import { useContext } from 'react'
function Toggle() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.lightTheme;

    const handleClick=()=>{
        theme.dispatch({type : "toggle"})
    }

  return (
    <div className='toggle' onClick={handleClick} >
           {darkMode?<Moon/>:<Sun size="2rem" color={"yellow"}/>} 
            
          
    </div>
  )
}

export default Toggle