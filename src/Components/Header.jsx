import React, { useContext, useState } from 'react'
import Todo from '../Images/TODO.png'
import Sun from '../Images/icon-sun.svg'
import Moon from '../Images/icon-moon.svg'
import { Theme } from '../Theme';

export default function Header() {
    let theme= useContext(Theme)
    const [icon, setIcon] = useState(Moon)
    function changeMode(){
        if(theme.theme === 'light'){
            theme.setTheme('dark')
            setIcon(Sun)
        }else{
            theme.setTheme('light')
            setIcon(Moon)
        }
    }
  return (
    <header>
        <img src={Todo} alt="Todo Logo" />
        <img onClick={changeMode} src={icon} alt="Maybe Sun or Moon Icon" />
    </header>
  )
}
