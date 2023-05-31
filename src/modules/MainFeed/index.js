import { useEffect, useState } from 'react';
import Card from '../Card';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/mainFeed.css';

const MainFeed = () => {
	const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setArr((prev) => {
				const newArr = prev.map((prev) => prev + 6);
				return newArr;
			});
		}, 5000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		(async () => {
			const urlArr = arr.map(
				(num) => `https://pokeapi.co/api/v2/pokemon/${num}/`
			);

			const promises = urlArr.map(async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				return data;
			});

			const res = await Promise.all(promises);
			setPokemonList((prev) => [...prev, ...res]);
		})();
	}, [arr]);

	// console.log(arr);
	// useEffect(() => {
	// 	let timeoutId;
	// 	const fetchPokemon = async (url = '') => {
	// 		const response = await fetch(
	// 			url || 'https://pokeapi.co/api/v2/pokemon?limit=2'
	// 		);
	// 		const data = await response.json();
	// 		setPokemonList((prev) => [...prev, ...data.results]);

	// 		if (data.next)
	// 			timeoutId = setTimeout(() => fetchPokemon(data.next), 5000);
	// 	};

	// 	fetchPokemon();

	// 	return () => {
	// 		console.log('console');
	// 		return clearTimeout(timeoutId);
	// 	};
	// }, []);

	return (
		<div className='main-feed'>
			total: {pokemonList.length}
			{pokemonList.length > 0 &&
				pokemonList.map((pokemon) => (
					<Card key={uuidv4()} _pokemon={pokemon} />
				))}
		</div>
	);
};

export default MainFeed;
