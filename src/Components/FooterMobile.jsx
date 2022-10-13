import React, { useContext, useEffect, useState } from 'react'
import { Theme } from '../Theme'
import Filters from './Filters'
export default function FooterMobile() {
    let theme = useContext(Theme)
    return (
        <div className={`footerMobile footerMobile-${theme.theme}`}>
            <p className='left'>{theme.left} items left</p>
            <div className="filterDesktop"><Filters /></div>
            <p onClick={theme.clearComplited} className='left'>Clear Completed</p>
        </div>
    )
}
