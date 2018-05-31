import React, {Component} from 'react';
import './FormWrapper.css';
import HeaderForm from '../../components/Forms/HeaderForm/HeaderForm';
import TodosForm from '../../components/Forms/TodosForm/TodosForm'
import FooterForm from '../../components/Forms/FooterForm/FooterForm';

import {connect} from 'react-redux'

import * as actionCreators from '../../store/actions/todos';

import {Route} from 'react-router-dom';

class FormWrapper extends Component {

    componentDidMount = () => {
        this.props.getTodoHandler();
    };
    render() {
        return (
            <div className="form-container">

                {/* #############      HEADER     ############ */}
                <Route path="/"
                       render={() => (
                           <HeaderForm
                               postTodoHandler={this.props.postTodoHandler}
                           />
                       )}
                />


                <Route path="/" exact
                       render={() => (
                           <TodosForm
                               todos={this.props.todos}
                               deleteTodoHandler={this.props.deleteTodoHandler}
                               putTodoHandler={this.props.putTodoHandler}

                           />)
                       }
                />


                <Route path="/completed-todos" exact
                       render={() => (
                           <TodosForm
                               todos={this.props.completedTodos}
                               deleteTodoHandler={this.props.deleteTodoHandler}
                               putTodoHandler={this.props.putTodoHandler}
                           />
                       )}
                />


                <Route path="/not-completed-todos" exact
                       render={() => (
                           <TodosForm
                               todos={this.props.notCompletedTodos}
                               deleteTodoHandler={this.props.deleteTodoHandler}
                               putTodoHandler={this.props.putTodoHandler}
                           />

                       )}
                />

                {/* #############      FOOTER     ############ */}
                <Route path="/" component={FooterForm}/>

            </div>
        )
    }


}
const mapStateToProps = state =>{
    return{
        todos: state.todos,
        completedTodos: state.todos.filter(todo => todo.done === true),
        notCompletedTodos: state.todos.filter(todo => todo.done === false),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getTodoHandler: () => dispatch(actionCreators.getTodos()),
        postTodoHandler: (contentInput) => dispatch(actionCreators.postTodo(contentInput)),
        deleteTodoHandler: (todoId) => dispatch(actionCreators.deleteTodo(todoId)),
        putTodoHandler: ({content: eVal, id: todoId, done: doneStats}) => dispatch(actionCreators.putTodo({
            content: eVal,
            id: todoId,
            done: doneStats
        }))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);