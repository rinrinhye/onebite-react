import {  useState} from 'react';
import './App.css'
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (deleteTodo) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== deleteTodo.id
    }))
  }

  const updateTodo = (updateTodo) => {
    setTodos(todos.map((todo) => {
      return todo.id === updateTodo.id ? updateTodo : todo
    }))
  }

  return (
    <div className='app'>
      <Header/>
      <Editor addTodo={addTodo} />
      <List todos={todos} addTodo={addTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
