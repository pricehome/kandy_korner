import React, {Component} from "react"

export default class CandyTypes extends Component {
	render() {
		return (
			<div>
				{this.props.candyType.map(candyType => (
					<article>{candyType}</article>
				))}
			</div>
		)
	}
}
