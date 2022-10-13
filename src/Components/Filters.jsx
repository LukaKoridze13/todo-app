import React, { useContext, useEffect, useRef } from 'react'
import { Theme } from '../Theme'
export default function Filters() {
    let theme = useContext(Theme)
    let all = useRef()
    let active = useRef()
    let completed = useRef()
    let pTags = [all, active, completed]
    function activate(event) {
        pTags.forEach((tag) => {
            tag.current.removeAttribute('id')
        })
        event.target.id = 'activeFilter'
    }
    return (
        <div className={`filters filters-${theme.theme}`} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <p id='activeFilter' onClick={(e) => { activate(e); theme.setFilter('All') }} ref={all}>All</p>
            <p onClick={(e) => { activate(e); theme.setFilter('Activate') }} ref={active}>Active</p>
            <p onClick={(e) => { activate(e); theme.setFilter('Completed') }} ref={completed}>Completed</p>
        </div>
    )
}
