import React from 'react';
import '../assets/css/Form.css'

const Form = () => {
  return (
    <div>
      <form id="form">
        <section className="inputs">
        <label for="to-do">Task to do: 
        <input type="text" id="to-do" placeholder="Insert task"></input>
        </label>
        <label for="Priority">Priority: 
        <select id="Priority" name="select">
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