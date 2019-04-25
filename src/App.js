import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos=[
  {
    task:'Go to gym',
    id:1,
    completed:false

  },
{
  task:'Sit on couch and watch tv',
  id:2,
  completed:false
}
]




class App extends React.Component {
  constructor() {
    super();
    this.state={
      todos
    };
  }
  
  addItem= item =>{
    this.setState({
      todos:[
        ...this.state.todos,
        {task: item, completed:false,id:Date.now()}
      ]
    })
  }

/*change = item => {
    this.setState({ [item.target.name]: item.target.value });


  }*/

  toggle=id=>{
    this.setState({
      todos: this.state.todos.map(item=>
        item.id===id ?{...item,completed:!item.completed}:item
        )
    })
  }

  clear=()=>{
    this.setState({
      todos:this.state.todos.filter(item=>!item.completed)
    })
  }

  

  /*render() {
    return (
      <div>
        <TodoList
         todos={this.state.todos}
         handleToggle={this.toggle}
        />
        <TodoForm
          value={this.state.todo}
          handleChange={this.change}
          handleAdd={this.addItem}
          handleCompleted={this.clear}
         
        />
      </div>
    );
  }*/


  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggle={this.toggle}
        />
        <button onClick={this.clear}>Clear Completed</button>
      </div>
    );
  }


}
export default App;

