import React from 'react';
import ReactDOM from 'react-dom'
import Todo from './Todo'
import TodoForm from './TodoForm'

class App extends React.Component {

    state = {
        todos: [
            {id: 1, description: 'sortir le chien'},
            {id: 2, description: 'faire la vaisselle'},
            {id: 3, description: 'acheter du citron'}
        ]
    }

    handleDelete = id => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.id === id)

    todos.splice(index, 1);

    this.setState({ todos })
    }

    handleAdd = todo => {
        const todos = [...this.state.todos];
        todos.push(todo);

        this.setState({todos})
    }
    
    

    render () {
        const title = 'Liste'

        return (
        <div>
            <h1>{title}</h1>
            <ul>
                {this.state.todos.map( todo => 
                    <Todo details={todo} onDelete={this.handleDelete}/>
                )}
            </ul>
            <TodoForm onTodoAdd={this.handleAdd}/>
            
        </div>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
