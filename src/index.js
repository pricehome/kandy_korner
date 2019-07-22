import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Route} from "react-router-dom"
import App from "./App"
import KandyKorner from "./components/KandyKorner"

ReactDOM.render(
	<Route>
		<App />
	</Route>,
	document.getElementById("root")
)
