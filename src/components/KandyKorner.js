import React, {Component} from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"

class KandyKorner extends Component {
	state = {
		StoreLocations: [],
		Employees: [],
		CandyTypes: [],
		IndividualCandies: []
	}

	render() {
		return (
			<div>
				<StoreLocations store={this.state.StoreLocations} />
				<Employees employees={this.state.Employees} />
				<CandyTypes candyType={this.state.CandyTypes} />
				<IndividualCandies candies={this.state.IndividualCandies} />
			</div>
		)
	}
}

export default KandyKorner
