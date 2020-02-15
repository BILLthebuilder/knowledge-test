import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {title: ''}
    }
    onChange = e => {
        this.setState({
            title:e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({
            title:''
        })
    }
    render() {
        return (
            <form style = {{
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-evenly'
            }}
            onSubmit={this.onSubmit}
            >
                <input
                    onChange={this.onChange}
                    type="text"
                    name='title'
                    value={this.state.title}
                />
                <input
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    value="submit"
                />
                {/* <p>{this.state.title}</p> */}
            </form>
        )
    }
}
