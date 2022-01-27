import './App.css';
import NavBar from './components/NavBar/NavBar';
import myStore from './components/configureStore';
import { Provider } from 'react-redux';

const App = () => {
	const store = myStore;

	return (
		<Provider store={store}>
			<div className="App">
				<NavBar />
			</div>
		</Provider>
	);
};

export default App;
