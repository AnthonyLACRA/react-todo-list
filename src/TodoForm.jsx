import React, { Component } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';

const InputGroup = Input.Group

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
                    <InputGroup compact block>
                    <Input 
                    size="large"
                    style={{width: 300}}
                    value={this.state.newTodo} 
                    onChange={this.handleChange} 
                    type="text" 
                    placeholder="Ajouter un todo" 
                    />
                    <Button type="primary" htmlType="submit" size="large">
                        Primary
                    </Button>
                    </InputGroup>
                </form>
    } 

}

export default TodoForm;