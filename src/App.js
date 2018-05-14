import React, {Component} from 'react';
import FormContainer from './containers/FormContainer/FormContainer';

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


    deleteTasksHandler = () => {
        let afterDeleteTasks = [...this.state.todos];
        afterDeleteTasks = [];
        this.setState({todos: afterDeleteTasks});
    };

    addTodo = (content_changed) => {
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

    deleteTodo =(id)=>{
        const copiedTodos = [...this.state.todos];
        const updateTodos = copiedTodos.filter(todo=> {
            return todo.id !== id
        });
        this.setState({todos: updateTodos});
    };

    updateTodo =(event, id) => {
        const todoIndex = this.state.todos.findIndex(todo=>{
            return todo.id === id;
        });
        const updatedTodo = {
            ...this.state.todos[todoIndex]
        };

        updatedTodo.content = event.target.value;

        const todos =[...this.state.todos];
        todos[todoIndex] = updatedTodo;

        this.setState({todos: todos});
    };

    toggleStatus=(id)=>{

       //find todoItem which I want to change
       const todoIndex = this.state.todos.findIndex(todo=> {
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
        const filterdTodos = this.state.todos.filter(todo=>{
            return todo.done === true;
        });

        const notCompletedTodos =this.state.todos.filter(todo=>{
            return todo.done === false;
        })
        const notCompletedTodosNum = notCompletedTodos.length;

        return (
            <div className="App">
                <FormContainer
                    todos={this.state.todos}
                    // changed={(event) => this.contentChangedHandler(event, todo.id)}
                    deleteTasks={this.deleteTasksHandler}
                    addTodo={this.addTodo}
                    deleteTodo={this.deleteTodo}
                    updateTodo={this.updateTodo}
                    toggleStatus={this.toggleStatus}
                    filterdTodos={filterdTodos}
                    notCompletedTodosNum={notCompletedTodosNum}
                />
            </div>
        )
    }

}

export default App;