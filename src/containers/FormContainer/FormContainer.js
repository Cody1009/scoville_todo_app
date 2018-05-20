import React from 'react';
import './FormContainer.css';
import HeaderForm from '../../components/Forms/HeaderForm/HeaderForm';
import ListForm from '../../components/Forms/ListForm/ListForm';
import FooterForm from '../../components/Forms/FooterForm/FooterForm';
import CompletedTodos from '../../components/Forms/CompletedTodos/CompletedTodos';
import NotCompletedTodos from '../../components/Forms/NotCompletedTodos/NotCompletedTodos';
import {Route} from 'react-router-dom';

const FormContainer = (props) => {


    return (
        <div className="form-container">

            {/* #############      HEADER     ############ */}
            <Route path="/"
                   render={() => (
                       <HeaderForm
                           postTodoHandler={props.postTodoHandler}
                           fetchDataHandler={props.fetchDataHandler}
                       />
                   )}
            />


            <Route path="/" exact
                   render={() => (
                       <ListForm
                           todos={props.todos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           putTodoContentHandler={props.putTodoContentHandler}
                           putTodoStatusHandler={props.putTodoStatusHandler}

                       />)
                   }
            />


            <Route path="/completed-todos" exact
                   render={() => (
                       <CompletedTodos
                           completedTodos={props.completedTodos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           putTodoContentHandler={props.putTodoContentHandler}
                           putTodoStatusHandler={props.putTodoStatusHandler}

                           notCompletedTodosNum={props.notCompletedTodosNum}
                       />
                   )}
            />


            <Route path="/not-completed-todos" exact
                   render={() => (
                       <NotCompletedTodos
                           notCompletedTodos={props.notCompletedTodos}
                           deleteTodoHandler={props.deleteTodoHandler}
                           putTodoContentHandler={props.putTodoContentHandler}
                           putTodoStatusHandler={props.putTodoStatusHandler}
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