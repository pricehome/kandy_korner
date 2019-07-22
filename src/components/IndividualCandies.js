import React, {Component} from "react"

export default class IndividualCandies extends Component {
	render() {
		return (
			<div>
				{this.props.candy.map(candy => (
					<article>{candy}</article>
				))}
			</div>
		)
	}
}
