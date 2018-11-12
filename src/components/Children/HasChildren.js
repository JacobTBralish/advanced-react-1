import React, { Component } from "react";

export default class HasChildren extends Component {
	state = {
		test: "this is sample data"
	};
	render() {
		return this.props.children(this.state.test);
	}
}
