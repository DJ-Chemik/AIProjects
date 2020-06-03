import React, {Component} from 'react';

class Task extends Component{
    state = {
        // isSelected: this.props.isFinished,
        actualStyle: {},
    }

    componentDidMount(){
        if (this.props.isFinished){
            this.setState({
                actualStyle: {textDecoration: "line-through"},
            });
        }else{
            this.setState({
                actualStyle: {fontWeight: "bold"},
            });
        }
        
    }
    
    setStyle = () => {
        if (!this.props.isFinished) {
            this.setState({
                actualStyle: {textDecoration: "line-through"}
            });
        }else{
            this.setState({
                actualStyle: {fontWeight: "bold"}
            });
        }
    }

    handleChange = (e) => {
        this.props.changeIsFinished();
        this.setState({
            isSelected: this.state.isSelected ? false : true,
        });
        this.setStyle();
    }

    render(){
        return (
        <div className="Task" style={this.state.actualStyle}>
            <input type="checkBox" checked={this.props.isFinished} onChange={this.handleChange}></input>
            {this.props.content}
        </div>
    );
  }
}

export default Task;