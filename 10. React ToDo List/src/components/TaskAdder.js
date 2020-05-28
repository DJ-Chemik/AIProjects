import React, {Component} from 'react';

class TaskAdder extends Component {

    state = {
        actualInputValue:'',
        latestTaskId: this.props.latestTaskId,
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            latestTaskId: this.state.latestTaskId+1,
        })
        this.props.onAdd({
            id:this.state.latestTaskId, 
            content:this.state.actualInputValue,
            isFinished: false,
        });
        this.setState({
            actualInputValue: ''
        })        
    }

    handleInputTextChange = (e) => {
        e.preventDefault();
        this.setState({
            actualInputValue: e.target.value,
        });
    }

    render(){
        return (
            <div className="TaskAdder">
              <form>
                  <input type='text' value={this.state.actualInputValue} onChange={this.handleInputTextChange}></input>      
                  <input type='submit' value="Add" onClick={this.handleClick}></input>
              </form> 
            </div>
        );
    }
    
}

export default TaskAdder;