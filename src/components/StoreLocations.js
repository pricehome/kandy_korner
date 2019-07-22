import React, {Component} from "react"

export default class StoreLocations extends Component {
	render() {
		return (
			<div>
				{this.props.store.map(store => (
					<article>{store}</article>
				))}
			</div>
		)
	}
}
