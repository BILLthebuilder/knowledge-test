import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TodoItem extends Component {
    checkBoxStyle = () => {
        return {
            marginTop: '20px',
            display:'flex',
            marginRight: '10px',
            backgroud: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
             
        }
   
}
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.checkBoxStyle()}>
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)}
                />
                <p style={{ titleStyle }}> {title}</p>
                <div
                    style={{
                        display: 'flex',
                        justifyContent:'space-between'
                    }}
                >
                    <Link to={`/edit/${id}`} >
                        <button
                    style={{
                    background: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '5px 5px',
                    borderRadius: '15%',
                    fontSize: '20px',
                    cursor: 'pointer'
                }}>Edit</button>
                    </Link>
                    
                    <button
                    onClick={this.props.deleteTodo.bind(this,id)}
                    style={{
                    background: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px 5px',
                    borderRadius: '15%',
                    fontSize: '20px',
                    cursor: 'pointer'
                    }}>delete</button>
                </div>
                
            </div>
        )
    }
}

const titleStyle = {
    marginRight: '10px'
}

