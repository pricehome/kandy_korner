import React, {Component} from "react"
import StoreLocations from "./StoreLocations"
import Employees from "./Employees"
import CandyTypes from "./CandyTypes"
import IndividualCandies from "./IndividualCandies"

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
				<Employees employee={this.state.Employees} />
				<CandyTypes candyType={this.state.CandyTypes} />
				<IndividualCandies candy={this.state.IndividualCandies} />
			</div>
		)
	}
}

export default KandyKorner
