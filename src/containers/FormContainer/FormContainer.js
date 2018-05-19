import React from 'react';
import './FormContainer.css';
import HeaderForm from '../../components/Forms/HeaderForm/HeaderForm';
import ListForm from '../../components/Forms/ListForm/ListForm';
import FooterForm from '../../components/Forms/FooterForm/FooterForm';
import CompletedTodos from '../../components/Forms/CompletedTodos/CompletedTodos';
import NotCompletedTodos from '../../components/Forms/NotCompletedTodos/NotCompletedTodos';
import {Route} from 'react-router-dom';

const FormContainer = (props) => {
    console.log(props);


    return (
        <div className="form-container">

            {/* #############      HEADER     ############ */}
            <Route path="/"
                   render={() => (
                       <HeaderForm
                           addTodoHandler={props.addTodoHandler}
                       />
                   )}
            />


            <Route path="/" exact
                   render={() => (
                       <ListForm
                           todos={props.todos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           updateTodoHandler={props.updateTodoHandler}
                           toggleStatusHandler={props.toggleStatusHandler}
                       />)
                   }
            />


            <Route path="/completed-todos" exact
                   render={() => (
                       <CompletedTodos
                           completedTodos={props.completedTodos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           updateTodoHandler={props.updateTodoHandler}
                           toggleStatusHandler={props.toggleStatusHandler}
                           notCompletedTodosNum={props.notCompletedTodosNum}
                       />
                   )}
            />


            <Route path="/not-completed-todos" exact
                   render={() => (
                       <NotCompletedTodos
                           notCompletedTodos={props.notCompletedTodos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           updateTodoHandler={props.updateTodoHandler}
                           toggleStatusHandler={props.toggleStatusHandler}
                           notCompletedTodosNum={props.notCompletedTodosNum}
                       />
                   )}
            />

            {/* #############      FOOTER     ############ */}
            <Route path="/"
                   render={() => (
                       <FooterForm
                           deleteCompletedTasksHandler={props.deleteCompletedTasksHandler}
                           completedTodosNum={props.completedTodosNum}
                       />
                   )}
            />





        </div>
    );
};

export default FormContainer;