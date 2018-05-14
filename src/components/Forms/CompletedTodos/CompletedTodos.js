import React from 'react';
import './CompletedTodo.css'

const completedTodos = (props) => {

    const completed_todos_list = props.filterdTodos.map(todo => {
        const doneTrueStyle ={
            color: 'blue'
        };

        const doneFalseStyle = {
            color:'red'
        };

        return (
            <p key={todo.id}>
                {todo.id}:
                <input type="text"
                       value={todo.content}
                       onChange={(event) => props.updateTodo(event, todo.id)}
                    //onChange={props.contentChanged}
                />



                <button onClick={() => {
                    props.deleteTodo(todo.id)
                }}>
                    DELETE!
                </button>

                <button
                    onClick={() => {
                        props.toggleStatus(todo.id)
                    }}
                >
                    Change Status!
                </button>

                <span style={ todo.done? doneTrueStyle: doneFalseStyle}> done status</span>

            </p>

        );
    });

    return (
        <div className="completed-todos">
            <h1>Done tasks!</h1>
            {completed_todos_list}
        </div>
    )

};

export default completedTodos;