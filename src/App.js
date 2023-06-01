import Navbar from './modules/Navbar';
import MainFeed from './modules/MainFeed';
import { Route, Routes } from 'react-router-dom';
import Favourites from './screens/Favourites';
import { useState } from 'react';

function App() {
	const [favouriteList, setFavouriteList] = useState([]);
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<MainFeed
							favouriteList={favouriteList}
							setFavouriteList={setFavouriteList}
						/>
					}
				/>
				<Route
					path='/favourites'
					element={
						<Favourites
							favouriteList={favouriteList}
							setFavouriteList={setFavouriteList}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
