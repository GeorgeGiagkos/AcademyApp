import { Link } from 'react-router-dom';
import image from '../photos/web-develop.png';
const Home = () => {
	return (
		<div className="container">
			<h2>Welcome to Academy</h2>
			<div className="info">
				<div className="info-paragraph">
					You can register here and join in our team to learn advance tools
					about Web development such is frameworks
					<ul className="register">
						<li>
							<Link className="nav-link" to="/login">
								<button>Register</button>
							</Link>
						</li>
					</ul>
				</div>
				<img style={{ width: '50%' }} src={image} />
			</div>
		</div>
	);
};

export default Home;
