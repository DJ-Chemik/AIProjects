import React from 'react'
import Task from './Task';

const ListOfTasks = (props) => {
      const taskList = props.tasks.length ? (
        props.tasks.map( (task) => {
          return(
            <li key={task.id}>
              <Task content={task.content}/>
            </li>
          )
        })
      ) : (
      <p>You have no any tasks to do :)</p>
    )
    

    return (
      <div className="ListOfTasks">
        <div className="hideTasks">
          <input type="checkBox" ></input>
          Hide finished tasks 
        </div>
        <ul>
          {taskList}
        </ul>
      </div>
    );
  
}

export default ListOfTasks;