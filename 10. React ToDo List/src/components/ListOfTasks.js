import React from 'react'
import Task from './Task';

const ListOfTasks = (props) => {
    const taskList = props.tasks.length ? (
        props.tasks.map( (task) => {
          if(props.hideFinished && task.isFinished){
            console.log("if");
            return(null);
          }else{
            console.log("else");
            return(
                <li key={task.id}>
                  <Task 
                  content={task.content} 
                  isFinished={task.isFinished}>
                  </Task>
                </li>
            );
          }
        })
      ) : (
      <p>You have no any tasks to do :)</p>
    )

    const handleChangeHidingCheckBox = (e) => {
      props.changeHiding();
    }
    

    return (
      <div className="ListOfTasks">
        <div className="hideTasks">
          <input type="checkBox" onChange={handleChangeHidingCheckBox} ></input>
          Hide finished tasks 
        </div>
        <ul>
          {taskList}
        </ul>
      </div>
    );
  
}

export default ListOfTasks;