import React, {Component} from 'react';
import './HeaderForm.css';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    textField:{
        width: 300,

    }
});

class HeaderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {content: ""};
    }

    handleChange=(event)=>{
        const contentInput = event.target.value;
        this.setState({content: contentInput});
    };

    handleSubmitKeyPress =(event)=>{
        if(event.key === 'Enter'){
            event.preventDefault();
            this.props.postTodoHandler(this.state.content);
            this.setState({content: ''});
        }


    };

    render() {
        const {classes} = this.props;

        return (

            <div className="header">
                <form action="todo-input" onKeyPress={this.handleSubmitKeyPress}>
                    <TextField
                        className={classes.textField}
                        value={this.state.content}
                        onChange={this.handleChange}
                        placeholder="What needs to be done?"
                        autoFocus
                    />
                </form>
            </div>
        );
    }
}

HeaderForm.propTypes={
    classes: PropTypes.object.isRequired,
    postTodoHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(HeaderForm);