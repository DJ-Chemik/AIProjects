import React, {Component} from 'react';
import '../App.css';
import ListOfTasks from './ListOfTasks'
import Title from './Title'
import TaskAdder from './TaskAdder';

class App extends Component{
  state = {
    hideFinished: false,

    tasks: [
      {id: 0, content: "Zrób obiad", isFinished: true},
      {id: 1, content: "Umyj gary", isFinished: false}
    ]
  }

  addNewTask = (newtask) => {
    const newTasks = this.state.tasks.slice();
    newTasks.push(newtask);
    this.setState({
      tasks: newTasks,
    })
  }

  changeHidingFinishedTasks = () => {
    console.log(this.state.hideFinished);
    this.setState({
      hideFinished: !this.state.hideFinished,
    });
    console.log(this.state.hideFinished);
  }

  changeIsTaskFinished = (id) => {
    const newTasks = this.state.tasks.slice();
    newTasks.map( (task) => {
      if(task.id===id){
        task.isFinished = !task.isFinished;
      }
    });
    this.setState({
      tasks: newTasks,
    });

  }

  render(){
    return (
      <div className="App">
        <Title title="Welcome to my To Do List!"/>
        <ListOfTasks 
          hideFinished={this.state.hideFinished}
          changeHiding={this.changeHidingFinishedTasks}
          changeIsTaskFinished={this.changeIsTaskFinished} 
          tasks={this.state.tasks}>
        </ListOfTasks>
        <TaskAdder onAdd={this.addNewTask} latestTaskId={this.state.tasks.length}/>
      </div>
    );
  }
}

export default App;
