import { useEffect, useRef, useState } from 'react';
import Card from '../Card';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/mainFeed.css';
import SortFilters from '../SortFilters';

const MainFeed = ({ searchTerm }) => {
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
		<div className='main-feed-container'>
			<SortFilters pokemonList={pokemonList} setPokemonList={setPokemonList} />
			<div className='main-feed'>
				{pokemonList.length > 0 &&
					pokemonList
						.filter((pokemon) => {
							if (searchTerm === '') return pokemon;
							let isTypePresent = false;
							const typeList = pokemon.types.map((type) => type.type.name);
							typeList.forEach((pok) => {
								if (pok.includes(searchTerm)) isTypePresent = true;
							});
							return (
								pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
								isTypePresent
							);
						})
						.map((pokemon) => <Card key={uuidv4()} _pokemon={pokemon} />)}
			</div>
		</div>
	);
};

export default MainFeed;
