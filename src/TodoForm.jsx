import React, { Component } from 'react'

class TodoForm extends Component {

    state = {
        newTodo: ''
    }

    handleChange = e => {
        this.setState({newTodo: e.currentTarget.value})
    }
    
    handleSubmit = e => {
        e.preventDefault();

        const id = new Date().getTime();
        const description = this.state.newTodo;

        this.props.onTodoAdd({id, description});

        this.setState({ newTodo: ''});
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
                    <input 
                    value={this.state.newTodo} 
                    onChange={this.handleChange} 
                    type="text" 
                    placeholder="Ajouter un todo" 
                    />
                    <button>Confirmer</button>
                </form>
    } 

}

export default TodoForm;