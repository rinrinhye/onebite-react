import './App.css';
import { useReducer, useState } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/TodoList';

const filters = ['all', 'active', 'completed'];

const reducer = (state, action) => {
  const { type, data } = action;

  switch (type) {
    case 'ADD':
      return [...state, data];
    case 'DELETE':
      return state.filter((todo) => todo.id !== data);
    case 'UPDATE':
      return state.map((todo) => {
        return todo.id === data.id ? data : todo;
      });
  }
};

function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [todos, dispatch] = useReducer(reducer, []);
  const [search, setSearch] = useState('');

  const addTodo = (newTodo) => {
    dispatch({ type: 'ADD', data: newTodo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE', data: id });
  };

  const updateTodo = (updateTodo) => {
    dispatch({ type: 'DELETE', data: updateTodo });
  };

  const getFilteredData = () => {
    const statusFilteredTodos = filterTodosByStatus(todos, filter);

    if (search === '') return statusFilteredTodos;

    return statusFilteredTodos.filter((todo) =>
      todo.text.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="app">
      <Header />
      <Editor addTodo={addTodo} />
      <div className="wrap-list">
        <FilterButtons
          filter={filter}
          filters={filters}
          onFilterChange={setFilter}
        />
        <SearchInput search={search} onSearchChange={setSearch} />
        <TodoList
          todos={filteredTodos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;

function filterTodosByStatus(todos, filter) {
  if (filter === 'all') {
    return todos;
  } else if (filter === 'active') {
    return todos.filter((todo) => todo.status === false);
  } else if (filter === 'completed') {
    return todos.filter((todo) => todo.status === true);
  }

  return todos;
}
