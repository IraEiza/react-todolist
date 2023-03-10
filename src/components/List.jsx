import React from 'react';
import '../assets/css/todos.css'

const List = ({todos, switchDone, deleteTodo}) => {

  return (
    <section className="list">
      {
        todos.map(todo => {
          return (
            <div className="todo-card" key={todo.id} style={todo.done === true ? {backgroundColor: "green", textDecoration: "line-through"}: {backgroundColor: "blue", textDecoration: "none"}}>
              <div className="container">
                <span> <input type="checkbox" checked={todo.done} onChange={() => switchDone(todo.id)}/> {todo.priority[0]} -  {todo.task}</span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </div>
          )
        })
      }
    </section>

  );
}

export default List;