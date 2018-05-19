import React, {Component} from 'react';
import FormContainer from './containers/FormContainer/FormContainer';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: [
                //{id:1, content: "task1", done: false}

            ],
            nextId: 0,
        }


    }


    deleteCompletedTasksHandler = () => {
        const copiedTodos = [...this.state.todos];
        const updateTodos = copiedTodos.filter(todo => {
            return todo.done === false;
        });
        this.setState({todos: updateTodos});
    };

    addTodoHandler = (content_changed) => {
        console.log("inside of add todo");

        this.setState({
            todos: [...this.state.todos,
                {
                    id: this.state.nextId + 1,
                    content: content_changed,
                    done: false
                }
            ],
            nextId: this.state.nextId + 1
        });
    };

    deleteTodoHandler = (id) => {
        const copiedTodos = [...this.state.todos];
        const updateTodos = copiedTodos.filter(todo => {
            return todo.id !== id
        });
        this.setState({todos: updateTodos});
    };

    updateTodoHandler = (event, id) => {
        const todoIndex = this.state.todos.findIndex(todo => {
            return todo.id === id;
        });
        const updatedTodo = {
            ...this.state.todos[todoIndex]
        };

        updatedTodo.content = event.target.value;

        const todos = [...this.state.todos];
        todos[todoIndex] = updatedTodo;

        this.setState({todos: todos});
    };

    toggleStatusHandler = (id) => {

        //find todoItem which I want to change
        const todoIndex = this.state.todos.findIndex(todo => {
            return todo.id === id;
        });

        const updatedTodo = {
            ...this.state.todos[todoIndex]
        };

        //change done status
        const currentDoneStatus = updatedTodo.done; //false

        updatedTodo.done = !currentDoneStatus; //false -> true

        //save the change above safely
        const todos = [...this.state.todos];
        todos[todoIndex] = updatedTodo;
        this.setState({todos: todos});
    };


    render() {
        //
        const completedTodos = this.state.todos.filter(todo => {
            return todo.done === true;
        });

        const notCompletedTodos = this.state.todos.filter(todo => {
            return todo.done === false;
        });

        const completedTodosNum = completedTodos.length;

        const notCompletedTodosNum = notCompletedTodos.length;


        return (

            <BrowserRouter>
                <div className="App">
                    <FormContainer
                        todos={this.state.todos}
                        // changed={(event) => this.contentChangedHandler(event, todo.id)}
                        deleteCompletedTasksHandler={this.deleteCompletedTasksHandler}
                        addTodoHandler={this.addTodoHandler}
                        deleteTodoHandler={this.deleteTodoHandler}
                        updateTodoHandler={this.updateTodoHandler}
                        toggleStatusHandler={this.toggleStatusHandler}
                        completedTodos={completedTodos}
                        completedTodosNum={completedTodosNum}
                        notCompletedTodos={notCompletedTodos}
                        notCompletedTodosNum={notCompletedTodosNum}
                    />
                </div>
            </BrowserRouter>
        )
    }

}

export default App;