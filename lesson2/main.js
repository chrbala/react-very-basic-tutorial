import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
	constructor() {
		super()
		this.state = {value: undefined}
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	render() {
		return (
			<div>
				<input onChange={this.handleChange.bind(this)} />
				<Greeting name={this.state.value} />
			</div>
		)
	}
}

// Components can contain other components. Here, we have
// moved the greeting to its own component
class Greeting extends Component {
	render() {
		var name = this.props.name
		
		return (
			<p>Hello {name}</p>
		)
	}
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement("div"))
)