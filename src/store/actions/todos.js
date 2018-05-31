import * as actionTypes from './actionTypes';


// ######## GET todos ############

export const getTodoStart = () => {
    return {
        type: actionTypes.GET_TODO_START
    }
};


export const getTodoSuccess = (todos) => {
    return {
        type: actionTypes.GET_TODO_SUCCESS,
        todos: todos
    }
};


export const getTodoFail = (error) => {
    return {
        type: actionTypes.GET_TODO_FAIL,
        error: error
    }
};

export const getTodos = () => {
    return dispatch => {
        dispatch(getTodoStart());
        fetch('http://localhost:3000/todos')
            .then((response) => response.json())
            .then((todos) => {
                dispatch(getTodoSuccess(todos));
            })
            .catch((error) => {
                dispatch(getTodoFail(error));
            })
    }
};

// ############# POST todos #############

export const postTodoStart = () => {
    return {
        type: actionTypes.POST_TODO_START
    }
};


export const postTodoSuccess = (postedTodo) => {
    return {
        type: actionTypes.POST_TODO_SUCCESS,
        postedTodo: postedTodo
    }
};


export const postTodoFail = (error) => {
    return {
        type: actionTypes.POST_TODO_FAIL,
        error: error
    }
};

export const postTodo = (contentInput) => {
    return dispatch => {
        dispatch(postTodoStart());
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'content': contentInput,
                'done': false
            })
        })
            .then(res => res.json())
            .then((postedTodo) => {
                // postedTodo: {"id":3, "content":"newly made task", "done":false}
                dispatch(postTodoSuccess(postedTodo));
            })
            .catch((error) => {
                return dispatch(postTodoFail(error));
            })

    }
};

// ########## PUT ###########


export const putTodoStart = () => {
    return {
        type: actionTypes.PUT_TODO_START
    }
};


export const putTodoSuccess = ({content: eVal, id: todoId, done: doneStats}) => {
    return {
        type: actionTypes.PUT_TODO_SUCCESS,
        eVal:eVal,
        todoId: todoId,
        doneStats: doneStats
    }
};


export const putTodoFail = (error) => {
    return {
        type: actionTypes.PUT_TODO_FAIL,
        error: error
    }
};



export const putTodo =({content: eVal, id: todoId, done: doneStats})=>{
    return dispatch => {
        dispatch(putTodoStart());
        fetch('http://localhost:3000/todos/' + todoId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'content': eVal,
                'done': doneStats
            })
        }).then(res => res.json())
            .then(()=> {
            dispatch(putTodoSuccess({content: eVal, id: todoId, done: doneStats}))
            })
            .catch((error) => dispatch(putTodoFail(error)));
    }
};




// ##### DELETE ####

export const deleteTodoStart = () => {
    return {
        type: actionTypes.DELETE_TODO_START
    }
};


export const deleteTodoSuccess = (todoId) => {
    return {
        type: actionTypes.DELETE_TODO_SUCCESS,
        todoId: todoId
    }
};


export const deleteTodoFail = (error) => {
    return {
        type: actionTypes.DELETE_TODO_FAIL,
        error: error
    }
};

export const deleteTodo = (todoId) => {
    return dispatch => {
        dispatch(deleteTodoStart());
        fetch('http://localhost:3000/todos/' + todoId, {
            method: 'DELETE'
        }).then(() => {
                dispatch(deleteTodoSuccess(todoId))
            })
            .catch((error) => dispatch(deleteTodoFail(error)))
    }
};

