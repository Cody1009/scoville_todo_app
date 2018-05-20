import React, {Component} from 'react';
import FormContainer from './containers/FormContainer/FormContainer';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                // {id:1 content:"Task1", done:false}
            ]
        }


    }

    // fetching todos from db.json
    fetchData = (url) => {
        fetch(url)
            .then((response) => {
                console.log(response);
                return response
            })
            .then((response) => response.json())
            .then((todos) => this.setState({todos: todos}))
            .catch((error) => console.error(error));
    };

    //GET TODOS

    fetchDataHandler = () => {
        this.fetchData('http://localhost:3000/todos')
    };


    componentWillMount = () => {
        this.fetchData('http://localhost:3000/todos');
        console.log('component will mount');
        console.log(this.state.todos);
    };


    // these method belows are used for CRUD of todos on json-server, not state.

    //POST

    postTodoHandler = (content_input) => {
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'content': content_input,
                'done': false
            })
        }).then(res => res.json())
            .then(console.log())
            .then(() => this.fetchDataHandler());
    };

    //PUT

    putTodoContentHandler = (event, todo_id, done_stats) => {
        const todoIndex = this.state.todos.findIndex(todo => {
            return todo.id === todo_id;
        });
        const updatedTodo = {
            ...this.state.todos[todoIndex]
        };

        updatedTodo.content = event.target.value;

        const todos = [...this.state.todos];
        todos[todoIndex] = updatedTodo;

        this.setState({todos: todos});

        let updated_content = event.target.value;

        fetch('http://localhost:3000/todos/' + todo_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'content': updated_content,
                'done': done_stats
            })
        }).then(res => res.json())
            .then(console.log)
            .then(() => this.fetchDataHandler());
    };


    putTodoStatusHandler = (todo_id, current_content, done_stats) => {
        fetch('http://localhost:3000/todos/' + todo_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'content': current_content,
                'done': !done_stats
            })
        }).then(res => res.json())
            .then(console.log)
            .then(() => this.fetchDataHandler());
    };

    deleteTodoHandler = (todo_id) => {
        fetch('http://localhost:3000/todos/' + todo_id, {
            method: 'DELETE'
        }).then(() =>this.fetchDataHandler())
            .then(console.log)

    };


//Todo: fetchを調べてフィルター機能を作り、done=trueのものだけ取り出す。

    deleteCompletedTasksHandler = () => {
        const copiedTodos = [...this.state.todos];
        const updateTodos = copiedTodos.filter(todo => {
            return todo.done === false;
        });
        this.setState({todos: updateTodos});
    };

    // below methods are used with state.

    // addTodoHandler = (content_changed) => {
    //     console.log("inside of add todo");
    //
    //     this.setState({
    //         todos: [...this.state.todos,
    //             {
    //                 id: this.state.nextId + 1,
    //                 content: content_changed,
    //                 done: false
    //             }
    //         ],
    //         nextId: this.state.nextId + 1
    //     });
    // };


    // deleteTodoHandler = (id) => {
    //     const copiedTodos = [...this.state.todos];
    //     const updateTodos = copiedTodos.filter(todo => {
    //         return todo.id !== id
    //     });
    //     this.setState({todos: updateTodos});
    // };


    // toggleStatusHandler = (id) => {
    //
    //     //find todoItem which I want to change
    //     const todoIndex = this.state.todos.findIndex(todo => {
    //         return todo.id === id;
    //     });
    //
    //     const updatedTodo = {
    //         ...this.state.todos[todoIndex]
    //     };
    //
    //     //change done status
    //     const currentDoneStatus = updatedTodo.done; //false
    //
    //     updatedTodo.done = !currentDoneStatus; //false -> true
    //
    //     //save the change above safely
    //     const todos = [...this.state.todos];
    //     todos[todoIndex] = updatedTodo;
    //     this.setState({todos: todos});
    // };


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

                        deleteCompletedTasksHandler={this.deleteCompletedTasksHandler}

                        //CRUD method
                        postTodoHandler={this.postTodoHandler}
                        deleteTodoHandler={this.deleteTodoHandler}
                        putTodoContentHandler={this.putTodoContentHandler}
                        putTodoStatusHandler={this.putTodoStatusHandler}
                        fetchDataHandler={this.fetchDataHandler}

                        updateTodoHandler={this.updateTodoHandler}
                        //Sort out todos
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