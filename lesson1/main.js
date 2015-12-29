import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	// Here we initialize the component state
	constructor() {
		super()
		this.state = {value: undefined}	// The default component value is undefined
	}

	// This is run when the input component changes.
	handleChange(event) {
		this.setState({value: event.target.value})
	}

	// We added an input element to set the person's name. Note that this needs to
	// be wrapped in a <div> because components must have exactly one top-level
	// component returned
	render() {
		return (
			<div>
				<input onChange={this.handleChange.bind(this)} />
				<p>Hello {this.state.value}</p>
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement("div"))
)