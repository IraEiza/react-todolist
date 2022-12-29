import React from 'react';
import '../assets/css/ToDos.css'

const List = (props) => {

  return (
    <section className="list">
      {
        props.toDos.map(toDo => {
          return (
            <div className="todo-card" key={toDo.id}>
              <div className="container">
                <span> <input type="checkbox" /> {toDo.task}</span>
                <button onClick="delete">Delete</button>
              </div>
            </div>
          )
        })
      }
    </section>

  );
}

export default List;