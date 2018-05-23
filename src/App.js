import React, {Component} from 'react';
import FormContainer from './containers/FormContainer/FormContainer';
import {BrowserRouter} from 'react-router-dom';
import {deleteTodo, fetchDataHandler, postTodo, putTodo} from './API/api';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                // {id:1 content:"Task1", done:false}
            ]
        }

    }

    componentDidMount = () => {
        fetchDataHandler()
            .then((todos) => this.setState({todos: todos}))
            .catch((error) => console.error(error));

    };

    postTodoHandler = (contentInput) => {
        postTodo(contentInput)
            .then((json) => {
                this.setState((prevState) => {
                    return {
                        todos: [...prevState.todos, json]
                    }
                })
            })
    }

    putTodoHandler = ({content: eVal, id: todoId, done: doneStats}) => {
        // get ready for State change
        const todoIndex = this.state.todos.findIndex(todo => {
            return todo.id === todoId;
        });
        const targetTodo = {
            ...this.state.todos[todoIndex]
        };
        targetTodo.content = eVal;
        targetTodo.done = doneStats;
        const updatedTodos = [...this.state.todos];
        updatedTodos[todoIndex] = targetTodo;

        //updating db.json and set State
        putTodo({content: eVal, id: todoId, done: doneStats})
            .then(this.setState({todos: updatedTodos}));

    }

    deleteTodoHandler = (todoId) => {
        deleteTodo(todoId)
            .then(() => {
                this.setState((prevState) => {
                    let copiedTodos = [...prevState.todos];
                    return {
                        todos: copiedTodos.filter(todo => {
                            return todo.id !== todoId
                        })
                    }
                });
            })
    }


    render() {
        //
        let completedTodos = this.state.todos.filter(todo => {
            return todo.done === true;
        });

        let notCompletedTodos = this.state.todos.filter(todo => {
            return todo.done === false;
        });

        return (

            <BrowserRouter>
                <div className="App">
                    <FormContainer
                        todos={this.state.todos}

                        //POST
                        postTodoHandler={this.postTodoHandler}

                        //PUT
                        putTodoHandler={this.putTodoHandler}

                        //DELETE
                        deleteTodoHandler={this.deleteTodoHandler}
                        //Sort out todos
                        completedTodos={completedTodos}
                        notCompletedTodos={notCompletedTodos}
                    />
                </div>
            </BrowserRouter>
        )
    }

}

export default App;
