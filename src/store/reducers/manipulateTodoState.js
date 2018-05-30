import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
    isFetching: false,
    todos: [
        // {id:1 content:"Task1", done:false}
    ]
};

// ########### GET TODOS ########

// state refers to previous state.
const getTodoStart =(state, action) =>{
    // setting state by updateObject
    return updateObject(state,{ isFetching: true});
};


const getTodoFail =(state, action) =>{

    return updateObject(state,{ isFetching: false});
};


const getTodoSuccess =(state, action) =>{
    // adding todos newly fetched, to previous state
    return updateObject(state,{
        isFetching: false,
        todos: action.todos
    });
};

// ####### POST TODO #########

const postTodoStart =(state, action) =>{
    // setting state by updateObject
    return updateObject(state,{ isFetching: true});
};


const postTodoFail =(state, action) =>{

    return updateObject(state,{ isFetching: false});
};


const postTodoSuccess =(state, action) =>{
    // adding todos newly fetched, to previous state
    return updateObject(state,{
        isFetching: false,
        todos: [...state.todos, action.postedTodo]
    });
};

// ######## PUT TODO #######

const putTodoStart =(state, action) =>{
    // setting state by updateObject
    return updateObject(state,{ isFetching: true});
};


const putTodoFail =(state, action) =>{

    return updateObject(state,{ isFetching: false});
};



const putTodoSuccess =(state, action) =>{
// export const putTodoSuccess = ({content: eVal, id: todoId, done: doneStats}) => {
//     return {
//         type: actionTypes.PUT_TODO_SUCCESS,
//         eVal:eVal,
//         todoId: todoId,
//         doneStats: doneStats
//     }
// };

    const todoIndex = state.todos.findIndex(todo => {
        return todo.id === action.todoId;
    });
    const targetTodo = {
        ...state.todos[todoIndex]
    };

    targetTodo.content = action.eVal;
    targetTodo.done = action.doneStats;

    const updatedTodos = [...state.todos];
    updatedTodos[todoIndex] = targetTodo;

    return updateObject(state,{
        isFetching: false,
        todos: updatedTodos
    });
};




// ######## DELETE TODO ########

const deleteTodoStart =(state, action) =>{
    // setting state by updateObject
    return updateObject(state,{ isFetching: true});
};


const deleteTodoFail =(state, action) =>{

    return updateObject(state,{ isFetching: false});
};


const deleteTodoSuccess =(state, action) =>{

    return updateObject(state,{
        isFetching: false,
        todos: [...state.todos].filter( todo =>{
            return todo.id !== action.todoId
        })
    })
};


const todoReducer =(state = initialState, action) =>{
    switch (action.type){
        // GET
        case actionTypes.GET_TODO_START: return getTodoStart(state, action);
        case actionTypes.GET_TODO_FAIL: return getTodoFail(state, action);
        case actionTypes.GET_TODO_SUCCESS: return getTodoSuccess(state, action);

        // POST
        case actionTypes.POST_TODO_START: return postTodoStart(state, action);
        case actionTypes.POST_TODO_FAIL: return postTodoFail(state, action);
        case actionTypes.POST_TODO_SUCCESS: return postTodoSuccess(state, action);

        //PUT
        case actionTypes.PUT_TODO_START: return putTodoStart(state, action);
        case actionTypes.PUT_TODO_FAIL: return  putTodoFail(state, action);
        case actionTypes.PUT_TODO_SUCCESS: return  putTodoSuccess(state, action);

        //DELETE
        case actionTypes.DELETE_TODO_START: return deleteTodoStart(state, action);
        case actionTypes.DELETE_TODO_FAIL: return deleteTodoFail(state, action);
        case actionTypes.DELETE_TODO_SUCCESS: return deleteTodoSuccess(state, action);

        default:
            return state
    }
};

export default todoReducer;