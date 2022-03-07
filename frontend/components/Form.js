import React from 'react'

export default class Form extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
    this.props.onSubmit()
  }

  onChange = evt => {
    const {value, id} =evt.target
    this.props.onChange(id, value)
  }
  render() {
    const { values } = this.props
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input
        value={values.textInput}
        onChange={this.onChange}
        type='text'
        id='textInput'
        placeholder='type to add a new task'
        />  
        <input type='submit'/>
        </form>

      </div>
    )
  }
}
