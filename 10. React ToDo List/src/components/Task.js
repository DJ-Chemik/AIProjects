import React, {Component} from 'react';

class Task extends Component{
    render(){
        return (
        <div className="Task">
            <input type="checkBox"></input>
            {this.props.content}
        </div>
    );
  }
}

export default Task;