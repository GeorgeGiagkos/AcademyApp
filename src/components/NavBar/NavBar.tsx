import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import LoginForm from '../LoginForm';
import PersonList from '../PersonList';

const NavBar = () => {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/login">
								Register
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/users">
								Users
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/Login" element={<LoginForm />} />

				<Route path="/users" element={<PersonList />} />
			</Routes>
		</Router>
	);
};

export default NavBar;
