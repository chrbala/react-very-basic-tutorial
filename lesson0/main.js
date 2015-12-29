import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// This is a component. render() returns other components that can be
// rendered on the web page.
class App extends Component {
	render() {
		return (
			<p>Hello</p>	// HTML components can be used here.
		)
	}
}

// This renders the app to the web page.
ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement("div"))
)