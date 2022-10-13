import React, { useContext, useState, useRef } from 'react'
import SingleTodo from './SingleTodo'
import { Theme } from '../Theme';
import FooterMobile from './FooterMobile';
export default function Todos(props) {
  let theme = useContext(Theme)
  const [change, setChange] = useState(true)
  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  const drop = (e) => {
    const todosCopy = [...theme.todos];
    const dragItemContent = todosCopy[dragItem.current];
    todosCopy.splice(dragItem.current, 1);
    todosCopy.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    theme.setTodos(todosCopy)
  };
  return (
    <main className={`main-${theme.theme}`} >
      {props.todos.map((todo, index) => {
        if (theme.filter === 'All') {
          return <SingleTodo todo={todo.text} status={todo.status} key={todo.text} change={change} setChange={setChange} onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop} />
        } else if (theme.filter === 'Activate') {
          if (todo.status === 'active') {
            return <SingleTodo todo={todo.text} status={todo.status} key={todo.text} change={change} setChange={setChange} onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} />
          }
        } else {
          if (todo.status === 'done') {
            return <SingleTodo todo={todo.text} status={todo.status} key={todo.text} change={change} setChange={setChange} onDragStart={(e) => dragStart(e, index)} onDragEnter={(e) => dragEnter(e, index)} onDragEnd={drop} />
          }
        }
      })}
      <FooterMobile />
    </main>
  )
}
