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

  //state
  const [toDos, setTodos] = useState(todoList)

  //agregar todo
  const addTodo = (newTodo) => {
    newTodo.id = generateUniqueId({useLetters: false})
    setTodos([
      ...toDos,
      newTodo
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
        TODO LIST
      </header>
      <section className="App-body">
      <Form addTodo={addTodo}/>
      <List toDos={toDos}/>
      </section>
    </div>
  );
}

export default App;
