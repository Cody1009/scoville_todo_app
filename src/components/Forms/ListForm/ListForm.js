import React from 'react';
import './ListForm.css'

const listForm = (props) => {


    const todos_list = props.todos.map(todo => {
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

                    { todo.done? <p className="finished">this task is done!</p> : <p className="not-finished">finish this task!</p>}

                </p>

        );
    });

    return (
        <div className="list">
            <h1>These tasks below are not done yet</h1>

            {todos_list}
        </div>
    )

};

export default listForm;