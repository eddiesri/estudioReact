import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e){
        const {value , name} = e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state)
        console.log(this.state)
    }
    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} className="form-control" placeholder="Title" name="title"/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} className="form-control" placeholder="Responsible" name="responsible"/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} className="form-control" placeholder="Description" name="description"/>
                    </div>
                    <div className="form-group">
                        select
                    </div>
                    <div className="form-group">
                        <select name="priority"  onChange={this.handleInput} className="form-control">
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" type="submit">Save</button>
                </form>
            </div>   
        );
    }
}

export default TodoForm;