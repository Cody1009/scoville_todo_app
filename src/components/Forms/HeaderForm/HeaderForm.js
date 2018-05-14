import React, {Component} from 'react';
import './HeaderForm.css';

class headerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {content: ""};
    }

    handleChange=(event)=>{
        const content_input = event.target.value;
        this.setState({content: content_input});
    };

    handleSubmit =(event)=>{
        event.preventDefault();
        this.props.addTodo(this.state.content);
        this.setState({content: ''});
    }

    render() {
        return (

            <div className="header">
                <h1>this is HEADER Form</h1>
                <form action="todo-input" onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.content} onChange={this.handleChange}/>
                    <input type="submit" value="Add to list"/>
                </form>
            </div>
        );
    }
}


export default headerForm;