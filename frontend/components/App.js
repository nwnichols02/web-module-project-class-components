import React from "react";
import ToDoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, task: "Take out the trash", completed: false },
        { id: 2, task: "Wash the dishes", completed: false },
        { id: 3, task: "Clean the Garage", completed: false },
      ],
    };
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };

  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleToggle = (clickedId) => {

    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if(todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
        return todo;
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Todo List:</h2>
        <ToDoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
