import React from 'react'

class Todo extends React.Component {
  render() {
    return (
      <li>
        {this.props.todo.task} {this.props.todo.completed ? <span>completed</span> : <span></span>}
      </li>
    );
  }
}

export default Todo;