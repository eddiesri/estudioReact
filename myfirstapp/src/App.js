import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm.js'
import {todos} from './todos.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
     todos: todos
    }
    this.handeAddTodo = this.handeAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
  }


  handeAddTodo(todo){
    this.setState({
      todos: [... this.state.todos, todo]
    })
  }

  handleRemoveTodo(index){
    if(window.confirm('Do you want to delete it?'))
    this.setState({
      todos: this.state.todos.filter((e,i) => {
        return i !== index
      })
    })
  }

  render(){
        const todos = this.state.todos.map((todo,i) => {
      return (
        <div className="col-md-4" key={i}>
                <div className = "card mt-4" >
          <div className = "card-header" ><h3> {todo.title}</h3> <span className="badge badge-pill badge-danger">{todo.priority}</span> </div>
          <div className="card-body"><p>{todo.description}</p> <mark>{todo.responsible}</mark> </div>
          <div className="card-footer"><button className="btn btn-danger" onClick={this.handleRemoveTodo.bind(this,i)}>Delete</button></div>
           </div>
        </div>

      )
    })
    return (
      <div className="App">
              <nav  className="navbar navbar-dark bg-dark">
              <a href ="" className="text-white" >Tasks <span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span></a>
              </nav> 
              < div className = "container" > 
                  <div className = "row mt-4" >
                  <div className="col-md-3 text-">
                    <img src={logo} className="App-logo " alt="logo" />
                    <TodoForm onAddTodo={this.handeAddTodo} />
                  </div>
                 
                  <div className="col-md-9">
                  <div className = "row mt-4" >
                  {todos}
                  </div>
                  </div>
                  </div>
              </div > 
          
      </div>
    );
  }
}

export default App;
