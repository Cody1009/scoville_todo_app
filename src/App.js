import React, {Component} from 'react';
import FormWrapper from './containers/FormWrapper/FormWrapper';
import {BrowserRouter} from 'react-router-dom';
import {deleteTodo, fetchDataHandler, postTodo, putTodo} from './API/api';
import {connect} from 'react-redux';

import * as actionCreators from './store/actions/manipulateTodoState';

class App extends Component {


    componentDidMount = () => {
        this.props.getTodoHandler();
    };

    render() {
        //
        let completedTodos = this.props.todos.filter(todo => {
            return todo.done === true;
        });

        let notCompletedTodos = this.props.todos.filter(todo => {
            return todo.done === false;
        });

        return (

            <BrowserRouter>
                <div className="App">
                    <FormWrapper
                        todos={this.props.todos}
                        completedTodos={completedTodos}
                        notCompletedTodos={notCompletedTodos}
                    />
                </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = state =>{
    return{
        todos: state.todos,
        isFetching: state.isFetching
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        getTodoHandler: () => dispatch(actionCreators.getTodos())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
