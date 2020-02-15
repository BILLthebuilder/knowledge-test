import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import axios from 'axios';


export default class TodoLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
            }
    }
    

  componentDidMount() {
    axios.get('http://localhost:3001/todos')
      .then(res => this.setState({ todos: res.data }) )

  }
    markComplete = (id) => {
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            })  
    }
    addTodo = (title) => {
        axios.post('http://localhost:3001/todos',
            {
                title,
                completed:false
            }
        )
            .then(res => this.setState({
            todos:[...this.state.todos, res.data]
        }))
    }
    deleteTodo = (id) => {
        axios.delete(`http://localhost:3001/todos/${id}`)
        .then( res => this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]}))
    }
    
    render() {

        return (
            <div>
                <AddTodo
                    addTodo={this.addTodo}
                />
                <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                />
            </div>
            
        )
    }
}

