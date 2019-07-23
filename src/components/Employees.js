import React, {Component} from "react"

export default class Employees extends Component {
	render() {
		return (
			<div>
				{this.props.employees.map(employee => (
					<article>{employee}</article>
				))}
			</div>
		)
	}
}
