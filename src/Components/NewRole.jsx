import React, { useContext, useEffect, useState } from 'react'
import { Theme } from '../Theme';

export default function NewRole(props) {
    const [todo, setTodo] = useState('Create a new todo…')
    const [color, setColor] = useState('white')
    const theme = useContext(Theme)
    function change(e) {
        setTodo(e.target.value)
    }
    function clear() {
        todo === 'Create a new todo…' && setTodo('')
    }
    function submit(e) {
        e.preventDefault()
        if (todo !== 'Create a new todo…' && todo !== '') {
            let x = props.todos
            x.unshift({text:todo, status:'active'})
            props.setTodos(x)
            setTodo('')
            props.setRenew(!props.renew)
        }
    }
    useEffect(() => {
        if (todo === 'Create a new todo…' && theme.theme === 'light') {
            setColor('#9495A5')
        } else if (todo === 'Create a new todo…') {
            setColor('#767992')
        } else if (theme.theme === 'light') {
            setColor('#393A4B')
        } else {
            setColor('#C8CBE7')
        }
    })
    return (
        <form onSubmit={submit} autoComplete='off' className={`form-${theme.theme}`}>
            <label htmlFor="create">
            </label>
            <input style={{ color }} onClick={clear} onChange={change} type="text" autoComplete='off' value={todo} />
        </form>
    )
}
