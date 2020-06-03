import React, {Component} from 'react';

class Task extends Component{
    state = {
        isSelected: this.props.isFinished,
        actualStyle: {fontWeight: "bold"},
    }

    handleChange = (e) => {
        this.props.changeIsFinished();
        this.setState({
            isSelected: this.state.isSelected ? false : true,
        });
        if (!this.state.isSelected) {
            this.setState({
                actualStyle: {textDecoration: "line-through"}
            });
        }else{
            this.setState({
                actualStyle: {fontWeight: "bold"}
            });
        }
    }

    render(){
        return (
        <div className="Task" style={this.state.actualStyle}>
            <input type="checkBox" checked={this.state.isSelected} value={this.props.isSelected} onChange={this.handleChange}></input>
            {this.props.content}
        </div>
    );
  }
}

export default Task;