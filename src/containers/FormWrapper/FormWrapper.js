import React from 'react';
import './FormWrapper.css';
import HeaderForm from '../../components/Forms/HeaderForm/HeaderForm';
import TodosForm from '../../components/Forms/TodosForm/TodosForm'
import FooterForm from '../../components/Forms/FooterForm/FooterForm';

import {connect} from 'react-redux'

import * as actionCreators from '../../store/actions/manipulateTodoState';

import {Route} from 'react-router-dom';

const FormWrapper = (props) => {


    return (
        <div className="form-container">

            {/* #############      HEADER     ############ */}
            <Route path="/"
                   render={() => (
                       <HeaderForm
                           postTodoHandler={props.postTodoHandler}
                       />
                   )}
            />


            <Route path="/" exact
                   render={() => (
                       <TodosForm
                           todos={props.todos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           putTodoHandler={props.putTodoHandler}

                       />)
                   }
            />


            <Route path="/completed-todos" exact
                   render={() => (
                       <TodosForm
                           todos={props.completedTodos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           putTodoHandler={props.putTodoHandler}
                       />
                   )}
            />


            <Route path="/not-completed-todos" exact
                   render={() => (
                       <TodosForm
                           todos={props.notCompletedTodos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           putTodoHandler={props.putTodoHandler}
                       />

                   )}
            />

            {/* #############      FOOTER     ############ */}
            <Route path="/" component={FooterForm}/>

        </div>
    );
};


const mapDispatchToProps = dispatch => {
    return {
        postTodoHandler: (contentInput) => dispatch(actionCreators.postTodo(contentInput)),
        deleteTodoHandler: (todoId) => dispatch(actionCreators.deleteTodo(todoId)),
        putTodoHandler: ({content: eVal, id: todoId, done: doneStats}) => dispatch(actionCreators.putTodo({
            content: eVal,
            id: todoId,
            done: doneStats
        }))
    }
};

export default connect(null, mapDispatchToProps)(FormWrapper);