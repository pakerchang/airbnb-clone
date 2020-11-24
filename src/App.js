import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import SearchPage from "./SearchPage";

function App() {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route path="/search">
						<SearchPage />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />

				{/* SearchPage */}
				{/* Header */}
				{/* ... */}
			</Router>
		</div>
	);
}

export default App;
