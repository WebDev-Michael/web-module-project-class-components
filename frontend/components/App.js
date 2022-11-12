import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"

  class App extends React.Component {

    constructor() {
      super();
      this.state = {
        todos: [
          {
            task: 'Organize Garage',
            id: 12345,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 32412,
            completed: false
          },
          {
            task: 'Study BloomTech',
            id: 12435,
            completed: false
          },
          {
            task: 'Feed the fish',
            id: 43256,
            completed: false
          }
        ]
      }
    }

    clearTodos = e => {
      e.preventDefault();
      this.setState({
        ...this.state, 
        todos: this.state.todos.filter(todo => {
          return (todo.completed === false);
        })
      })
    }

    

    addTodos = task => {

      const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

      this.setState({
        ...this.state,
        todos: [...this.state.todos, newTodo]
      });
    }

    handleToggle = (clickedId) => {
      this.setState({
        ...this.state,
        todos: this.todos.map(todo => {
          if(todo.id === clickedId) {
            return{
              ...todo,
              completed: !todo.completed
          }
          } else return todo;
        })
      })
    }

  render() {
    const { todos } = this.state;
       return (
      <div className="App">
        <h1>TODOS</h1>
          <TodoList  todos={todos}/>
          <Form addTodos={this.addTodos}/>
          <button onClick={this.clearTodos}>Clear</button>
      </div>
    )
  }
}

export default App;