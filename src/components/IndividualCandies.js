import React, {Component} from "react"

export default class IndividualCandies extends Component {
	render() {
		return (
			<section className="candies">
				<h1>Candy List</h1>
				{this.props.candies.map(candy => (
					<div key={candy.id}>
						<div>
							<strong>Candy: </strong>
							{candy.name}
						</div>
						<div>
							<strong>Type: </strong>
							{
								this.props.candyTypes.find(
									type => type.id === candy.candyTypeId
								).type
							}
						</div>
					</div>
				))}
			</section>
		)
	}
}
