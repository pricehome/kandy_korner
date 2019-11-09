import {Route} from "react-router-dom"
import React, {Component} from "react"
import StoreLocations from "./StoreLocations"
import Employees from "./Employees"
import IndividualCandies from "./IndividualCandies"

// complete

export default class ApplicationViews extends Component {
	state = {
		StoreLocations: [],
		Employees: [],
		CandyTypes: [],
		IndividualCandies: []
	}

	componentDidMount() {
		const newState = {}

		fetch("http://localhost:5002/employees")
			.then(r => r.json())
			.then(employees => (newState.employees = employees))
			.then(() => fetch("http://localhost:5002/candies").then(r => r.json()))
			.then(candies => (newState.candies = candies))
			.then(() => fetch("http://localhost:5002/").then(r => r.json()))
			.then(store => (newState.candies = store))
			.then(() => this.setState(newState))
	}

	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path="/"
					render={props => {
						return <StoreLocations store={this.state.store} />
					}}
				/>
				<Route
					exact
					path="/employees"
					render={props => {
						return <Employees employees={this.state.employees} />
					}}
				/>
				<Route
					exact
					path="/individualCandies"
					render={props => {
						return <IndividualCandies candies={this.state.candies} />
					}}
				/>
			</React.Fragment>
		)
	}
}
