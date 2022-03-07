import React from "react";
import Form from "./Form";

let idx = 0;
const getIdx = () => ++idx;

const quotes = [
  { id: getIdx(), name: "Take out the trash", completed: false },
  { id: getIdx(), name: "Wash the dishes", completed: false },
  { id: getIdx(), name: "Clean the Garage", completed: false },
];

const initialState = {
  quotes,
  form: {
    textInput: "",
  },
};

export default class App extends React.Component {
  state = initialState;

  destroy = (id) => {
    this.setState({
      ...this.state,
      quotes: this.state.quotes.filter((quote) => quote.id !== id),
    });
  };

  changeInput = (key, value) => {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: value },
    });
  };

  addQuote = () => {
    const {
      quotes,
      form: { textInput },

    } = this.state;
    const newTask = { id: getIdx(), name: textInput };
    this.setState({
      ...this.state,
      form: initialState.form,
      quotes: [...quotes, newTask],
    });
  };

  render() {
    console.log("props are", this.props);
    console.log("state is", this.state);

    const { quotes, form } = this.state;

    return (
      <div>
        <h2>Todo List:</h2>
        <ul>
          {quotes.map((quote) => {
            const { id, name, completed } = quote;
            return (
              <li className="qt" key={id}>
                Task: {name}
                <button onClick={(evt) => this.destroy(id)}>Remove</button>
              </li>
            );
          })}
        </ul>
        <Form
          onChange={this.changeInput}
          values={form}
          onSubmit={this.addQuote}
        />
      </div>
    );
  }
}
