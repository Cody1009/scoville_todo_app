import React from 'react';
import './FormContainer.css';
import HeaderForm from '../../components/Forms/HeaderForm/HeaderForm';
import ListForm from '../../components/Forms/ListForm/ListForm';
import FooterForm from '../../components/Forms/FooterForm/FooterForm';
import CompletedTodos from '../../components/Forms/CompletedTodos/CompletedTodos';

const FormContainer = (props) => {
    console.log(props);


    return(
        <div className="form-container">
            <HeaderForm
                addTodo={props.addTodo}
            />
            <ListForm
                todos={props.todos}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
                toggleStatus={props.toggleStatus}
            />
            <CompletedTodos
                filterdTodos={props.filterdTodos}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
                toggleStatus={props.toggleStatus}
            />
            <FooterForm delete={props.deleteTasks}/>
        </div>
    );
};

export default FormContainer;