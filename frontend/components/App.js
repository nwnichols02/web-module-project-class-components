import React from "react";
import ToDoList from "./TodoList";
import Form from './Form';


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

  render() {
    console.log("props are", this.props);
    console.log("state is", this.state);
    const { todos } = this.state;
    return (
      <div>
        <h2>Todo List:</h2>
        <p>Click a task to remove</p>
        <ToDoList todos={todos}/>
        <Form/>
        <button>Clear</button>
      </div>
    );
  }
}
