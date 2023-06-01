import Navbar from './modules/Navbar';
import MainFeed from './modules/MainFeed';
import { Route, Routes } from 'react-router-dom';
import Favourites from './screens/Favourites';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<MainFeed />} />
				<Route path='/favourites' element={<Favourites />} />
			</Routes>
		</div>
	);
}

export default App;
