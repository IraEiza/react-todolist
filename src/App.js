import './assets/css/App.css';
import React, {useState} from 'react';
import List from './components/List.jsx'
import Form from './components/Form.jsx'

const generateUniqueId = require('generate-unique-id');

function App() {

  const todoList = [
    {id: generateUniqueId({useLetters: false}), task: 'Clean my room', priority: "Medium", done: false},
    {id: generateUniqueId({useLetters: false}), task: 'Cook', priority: "Low", done: false},
    {id: generateUniqueId({useLetters: false}), task: 'Laundry', priority: "High", done: false}
  ]

  // State (datos)
  const [todos, setTodos] = useState(todoList)

  // Agregar todo
  const addTodo = (newTodo) => {
    newTodo.id = generateUniqueId({useLetters: false});
    newTodo.done = false;
    setTodos([
      ...todos,
      newTodo
    ])
  }

  // Cambiar estado del todo
  const switchDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : {...todo})
    )
  }

  // Eliminar todo de la lista
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        TODO LIST
      </header>
      <section className="App-body">
      <Form addTodo={addTodo}/>
      <List todos={todos} switchDone={switchDone} deleteTodo={deleteTodo}/>
      </section>
    </div>
  );
}

export default App;
