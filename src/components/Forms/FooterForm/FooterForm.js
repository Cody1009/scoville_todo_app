import React from 'react';
import  './FooterForm.css';

const footerForm = (props) => (
    <div className="footer">
        <h1>this is Footer Form</h1>
        <div className="task-status-list">

                <a href="#">All</a>
                <a href="#">Active</a>
                <a href="#" >Completed</a>
                <a href="#" onClick={props.delete}>Delete All Completed Tasks</a>

        </div>

    </div>

);

export default footerForm;