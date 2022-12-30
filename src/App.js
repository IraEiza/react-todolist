import './assets/css/App.css';
import React, { useState } from 'react';
import List from './components/List.jsx'
import Form from './components/Form.jsx'

const generateUniqueId = require('generate-unique-id');

function App() {

  const todoList = [
    { id: generateUniqueId({ useLetters: false }), task: 'Eat', priority: "High", done: false },
    { id: generateUniqueId({ useLetters: false }), task: 'Coding', priority: "Medium", done: false },
    { id: generateUniqueId({ useLetters: false }), task: 'Sleep', priority: "Low", done: false }
  ]

  // State (datos)
  const [todos, setTodos] = useState(todoList)

  // Agregar todo
  const addTodo = (newTodo) => {
    newTodo.id = generateUniqueId({ useLetters: false });
    newTodo.done = false;
    setTodos(sortTodos([
      ...todos,
      newTodo
    ]))
    
  }

  // Cambiar de hecho a no hecho
  const switchDone = (id) => {
    setTodos(
      sortTodos(
        todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : { ...todo })
      )
    )
  }

  // Eliminar todo de la lista
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //Ordenar todos
  function sortTodos(todos) {
    const order = ['High', 'Medium', 'Low']
    return todos
      .sort((a, b) => a.done === false && b.done === true ? -1 : 1)
      .sort(function (a, b) {
        if (a.done === false && b.done === false) {
          console.log()
          return order.indexOf(a.priority) - order.indexOf(b.priority)
        }
        else {
          return 0
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        TODO LIST
      </header>
      <section className="App-body">
        <Form addTodo={addTodo} />
        <List todos={todos} switchDone={switchDone} deleteTodo={deleteTodo} />
      </section>
    </div>
  );
}

export default App;
