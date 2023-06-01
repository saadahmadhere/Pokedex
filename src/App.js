import Navbar from './modules/Navbar';
import MainFeed from './modules/MainFeed';
import { Route, Routes } from 'react-router-dom';
import Favourites from './screens/Favourites';
import { useState } from 'react';

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<>
			<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Routes>
				<Route path='/' element={<MainFeed searchTerm={searchTerm} />} />
				<Route
					path='/favourites'
					element={<Favourites searchTerm={searchTerm} />}
				/>
			</Routes>
		</>
	);
}

export default App;
