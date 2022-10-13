import React, { useContext, useEffect, useRef, useState } from 'react'
import { Theme } from '../Theme';
import Delete from '../Images/icon-cross.svg';
export default function SingleTodo(props) {
  let theme = useContext(Theme)
  const [done, setDone] = useState(false)
  let text = useRef()
  let marker = useRef()
  function mark(e) {
    e.target.classList.toggle('marked')
    text.current.classList.toggle('marked-text')
    if (e.target.classList.contains('marked')) {
      setDone(true)
    } else {
      setDone(false)
    }
    theme.changeStatus(props.todo)
  }
  useEffect(() => {
    if (props.status === 'done') {
      marker.current.classList.add('marked')
      text.current.classList.add('marked-text')
      if (!done) {
        setDone(true)
      }
    }
  })
  return (
    <div className={`todo todo-${theme.theme}`} draggable onDragStart={props.onDragStart} onDragEnter={props.onDragEnter} onDragEnd={props.onDragEnd}>
      <div>
        <div className="mark" ref={marker} onClick={mark}></div>
        <p ref={text}>{props.todo}</p>
      </div>
      {!done && < img onClick={() => { theme.removeTodo(props.todo); props.setChange(!props.change); }} src={Delete} alt="Delete Cross" />}
    </div>
  )
}
