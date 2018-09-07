import React, {Component} from 'react';
import FormWrapper from './containers/FormWrapper/FormWrapper';
import {BrowserRouter} from 'react-router-dom';


class App extends Component {
    render() {

        return (

            <BrowserRouter>
                <div className="App">
                    <FormWrapper
                        todos={this.props.todos}
                        completedTodos={this.props.completedTodos}
                        notCompletedTodos={this.props.notCompletedTodos}
                    />
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
