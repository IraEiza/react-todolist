import React, { useState } from 'react';
import '../assets/css/Form.css'

const Form = ({addTodo}) => {
  // Cada variable (estado) necesita su propio Hook
  const [newTodo, setNewTodo] = useState('');
  const [newType, setNewType] = useState('Low');

  // "Enlaza" el valor del estado al input actualizándolo continuamente
  const handleOnChangeTask = (event) => {
    setNewTodo(event.currentTarget.value)
  }
  // "Enlaza" el valor del estado al select
  const handleOnChangeType = (event) => {
    setNewType(event.currentTarget.value)
  }
  
  // Lo que hacemos al darle al botón
  const handleSubmit = (event) => {
    event.preventDefault() // Para que el formulario no mande datos por defecto (evita que la pág se refresque cuando le damos al botón)
    if(newTodo.trim() !== '') {
      addTodo({
        task: newTodo, 
        priority: newType
      });
      setNewTodo(''); // Limpia el input
    }
  }

  return (
    <div>
      <form id="form" onSubmit = {handleSubmit}>
        <section className="inputs">
        <label htmlFor="to-do">Task to do: 
        <input type="text" id="to-do" placeholder="Insert task" value={newTodo} onChange={handleOnChangeTask}></input>
        </label>
        <label htmlFor="Priority">Priority: 
        <select id="Priority" name="select" value={newType} onChange={handleOnChangeType}>
          <option value="Low" defaultValue>Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        </label>
        </section>
        <br />        
        <button>Add task</button>
      </form>

    </div>
  );
}

export default Form;