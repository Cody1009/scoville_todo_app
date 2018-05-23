import React from 'react';
import './FormContainer.css';
import HeaderForm from '../../components/Forms/HeaderForm/HeaderForm';
import TodosForm from '../../components/Forms/TodosForm/TodosForm';
import FooterForm from '../../components/Forms/FooterForm/FooterForm';

import {Route} from 'react-router-dom';

const FormContainer = (props) => {


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

export default FormContainer;