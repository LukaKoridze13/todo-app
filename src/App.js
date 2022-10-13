import './CSS/Reset.css';
import './CSS/style.css';
import './CSS/responsive.css';

import { Theme } from './Theme';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import NewRole from './Components/NewRole';
import Todos from './Components/Todos';
import Filters from './Components/Filters';
function App() {
  const [theme, setTheme] = useState('light')
  const [todos, setTodos] = useState([])
  const [renew, setRenew] = useState(true)
  const [filter, setFilter] = useState('All')
  const [left, setLeft] = useState(0)
  function removeTodo(text) {
    let index;
    todos.forEach((todo, int) => {
      if (todo.text === text) {
        index = int
      }
    })
    todos.splice(index, 1);
    setTodos(todos)
    let c = 0;
    todos.forEach((x) => {
      if (x.status === 'active') {
        c++;
      }
      setLeft(c)
    })
    setRenew(!renew)
  }
  function clearComplited() {
    let x = todos.filter((item) => {
      return item.status === 'active'
    });
    setTodos(x)
  }
  function changeStatus(text) {
    todos.forEach((todo, int) => {
      if (todo.text === text) {
        if (todo.status === 'done') {
          todo.status = 'active'
        } else {
          todo.status = 'done'
        }
      }
    })
    setTodos(todos)
    let c = 0;
    todos.forEach((x) => {
      if (x.status === 'active') {
        c++;
      }
      setLeft(c)
    })
  }
  useEffect(() => {
    let c = 0;
    todos.forEach((x) => {
      if (x.status === 'active') {
        c++;
      }
      setLeft(c)
    })
    if (todos.length === 0) {
      setLeft(0)
    }
  })
  return (
    <Theme.Provider value={{ theme, setTheme, removeTodo, todos, setTodos, changeStatus, left, clearComplited, filter, setFilter }}>
      <div className={`container container-${theme}`}>
        <Header />
        <NewRole todos={todos} setTodos={setTodos} setRenew={setRenew} renew={renew} />
        {todos.length > 0 && <Todos todos={todos} />}
        {todos.length > 0 && <div className="filterMobile"><Filters /></div>}
        {todos.length > 0 && <p className={`dnd dnd-${theme}`}>Drag and drop to reorder list</p>}
      </div>
    </Theme.Provider>
  );
}
export default App;
