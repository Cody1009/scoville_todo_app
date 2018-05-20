import React from 'react';
import './CompletedTodo.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    checkBox:{
        marginRight: '10px',
        height:'30px',
        width: '30px',
        borderRadius: 10
    },
    textField:{
        width: 200,
    },
    button:{
        marginLeft: '20px',
        backgroundColor: '#ff8080',
        color: '#ffffff',
        boxShadow: '0 0 2px #ff4d4d;'
    }

});

const completedTodos = (props) => {
    const {classes} = props;
    const completed_todos_list = props.completedTodos.map(todo => {
        return (
            <div key={todo.id} className="todo-card">
                <Checkbox
                    className={classes.checkBox}
                    onChange={() => {
                        props.putTodoStatusHandler(todo.id, todo.content, todo.done);
                    }}
                    color="primary"
                    checked={todo.done}
                />

                <TextField
                    className={classes.textField}
                    label="Todo"
                    value={todo.content}
                    onChange={(event) => props.putTodoContentHandler(event, todo.id, todo.done)}
                />

                <Button
                    className={classes.button}
                    key={todo.id}
                    onClick={() => {
                        props.deleteTodoHandler(todo.id)
                    }}>
                    delete
                </Button>

            </div>

        );
    });

    return (
        <div className="completed-todos">
            {completed_todos_list}
            <div className="todo-num">
                {props.notCompletedTodosNum} items left
            </div>
        </div>
    )

};

completedTodos.propTypes={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(completedTodos);