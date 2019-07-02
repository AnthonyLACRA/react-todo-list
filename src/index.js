import React from 'react';
import ReactDOM from 'react-dom'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;



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
        return (
        <Layout className="layout">
            <Header style={{ textAlign: 'center', color: 'white', fontSize: '35px'}}>- Reactodo -</Header>
            <Content style={{ padding: '50px' }}>
                <Row style={{ background: '#fff', padding: 24, minHeight: 480 }}>
                    <Row type="flex" justify="center">
                        <TodoForm onTodoAdd={this.handleAdd}/>
                    </ Row>
                    <div>
                        <Card title="Qu'est-ce qu'il me reste à faire ?" bordered={false} style={{ width: 600 }}>
                            <ul>
                                {this.state.todos.map( todo => 
                                    <Todo details={todo} onDelete={this.handleDelete}/>
                                )}
                            </ul>
                        </Card>
                    </div>
                    
                </Row>
               
            </Content>
            <Footer style={{ textAlign: 'center'}}>Anthony lacrabere ©2019</Footer>
        </Layout>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
