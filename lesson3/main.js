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

class Greeting extends Component {
	render() {
		var name = this.props.name
		
		// you can add CSS styles inline like this
		return (
			<p style={{color: 'pink'}}>Hello {name}</p>
		)
	}
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement("div"))
)