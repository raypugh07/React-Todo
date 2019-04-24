import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Go to gym',
          id:1,
          completed: false
        },
        {
          task: 'Lay on couch and do nothing',
          id: 2,
          completed: false
        }
      ],
      todo: ''
    };
  }
  
  add = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  change = e => this.setState({ [e.target.name]: e.target.value });

  

  render() {
    return (
      <div>
        <TodoList
         todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleChange={this.change}
          handleAdd={this.add}
         
        />
      </div>
    );
  }
}

export default App;