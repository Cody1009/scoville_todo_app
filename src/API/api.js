// // fetching todos from db.json
// // need 'self' for passing 'this' context to deleteTodoHandler
// function fetchDataHandler() {
//     return fetch('http://localhost:3000/todos')
//         .then((response) => {
//             console.log(response);
//             return response
//         })
//         .then((response) => response.json());
// }
//
// function postTodo(contentInput) {
//     return fetch('http://localhost:3000/todos', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             'content': contentInput,
//             'done': false
//         })
//     }).then(res => res.json());
//
// }
//
// function putTodo({content: eVal, id: todoId, done: doneStats}) {
//     // updating db.json
//     return fetch('http://localhost:3000/todos/' + todoId, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             'content': eVal,
//             'done': doneStats
//         })
//     }).then(res => res.json());
// }
//
// function deleteTodo(todoId) {
//     return fetch('http://localhost:3000/todos/' + todoId, {
//         method: 'DELETE'
//     }).then(res => res.json());
// }
//
//
// export {fetchDataHandler, postTodo, putTodo, deleteTodo}