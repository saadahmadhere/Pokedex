import { useEffect, useState } from 'react';
import Card from '../Card';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/mainFeed.css';

const MainFeed = () => {
	const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setArr((prev) => {
				const newArr = prev.map((prev) => prev + 10);
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

	return (
		<div className='main-feed'>
			{pokemonList.length > 0 &&
				pokemonList.map((pokemon) => (
					<Card key={uuidv4()} _pokemon={pokemon} />
				))}
		</div>
	);
};

export default MainFeed;
