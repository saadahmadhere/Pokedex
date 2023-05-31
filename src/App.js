import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from './modules/Card';
import Navbar from './modules/Navbar';

function App() {
	const [pokemonData, setPokemonData] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const result = await fetch(
					'https://pokeapi.co/api/v2/pokemon?offset=30&limit=10'
				);
				const data = await result.json();
				setPokemonData(data.results);
			} catch (error) {
				console.error(error.message);
			} finally {
				setLoading(false);
			}
		})();
	}, []);
	console.log(pokemonData);
	return (
		<div className='App'>
			<Navbar />
			{pokemonData.length > 0 &&
				pokemonData.map((pokemon) => (
					<Card key={uuidv4()} pokemonDetails={pokemon} />
				))}
			<Card />
		</div>
	);
}

export default App;
