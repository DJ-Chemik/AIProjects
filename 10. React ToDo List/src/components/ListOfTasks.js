import React from 'react'
import Task from './Task';

const ListOfTasks = (props) => {
    const taskList = props.tasks.length ? (
        props.tasks.map( (task) => {
          const changeFinishedTask = () => {
            props.changeIsTaskFinished(task.id);
          }
          if(props.hideFinished && task.isFinished){
            return(null);
          }else{
            return(
                <li key={task.id}>
                  <Task 
                  content={task.content} 
                  isFinished={task.isFinished}
                  changeIsFinished={changeFinishedTask}>
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