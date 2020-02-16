import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {title:''}
    }
    componentDidMount = () => {
        const { id } = this.props.match.params;
        axios.get(`http://localhost:3001/todos/${id}`)
            .then( res =>
                this.setState({
                    title:res.data.title
                })
            )
       .catch(err => console.log(err)) 
    }
    onChange = e => {
        this.setState({
            title : e.target.value
        })
    }
    render() {
        return (
            <form
                style = {{
                display: 'flex',
                marginTop: '20px'
            }}
            >
                <input
                    onChange={this.onChange}
                    type="text"
                    name="title"
                    value={this.state.title}
                    style={{
                        width:'400px'
                    }}
                />
                <Link to={`/`} >
                        <input
                    style={{
                    background: 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '5px 5px',
                    borderRadius: '15%',
                    fontSize: '20px',
                    cursor: 'pointer'
                        }}
                        type="submit"
                        value="save"
                    />
                    </Link>
            </form>
        )
    }
}
