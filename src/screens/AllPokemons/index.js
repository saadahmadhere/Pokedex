import { useEffect, useState } from 'react';
import SortFilters from '../../modules/SortFilters';
import Card from '../../modules/Card';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/allPokemons.css';

const AllPokemons = ({ searchTerm }) => {
	const [pokemonList, setPokemonList] = useState([]);
	const [nextUrl, setNextUrl] = useState('');

	useEffect(() => {
		fetchPokemonNames();
	}, []);

	const fetchPokemonNames = async (url = '') => {
		try {
			const response = await fetch(
				url || 'https://pokeapi.co/api/v2/pokemon?limit=30'
			);
			const data = await response.json();
			const nameList = data.results.map((pokemon) => pokemon.name);
			getPokemonListByNames(nameList);
			setNextUrl(data.next);
		} catch (error) {
			console.error(error.message);
		}
	};

	const getPokemonListByNames = async (nameList) => {
		try {
			const urlList = nameList.map(
				(name) => `https://pokeapi.co/api/v2/pokemon/${name}/`
			);

			const promises = urlList.map(async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				return data;
			});

			const res = await Promise.all(promises);
			setPokemonList(res);
		} catch (error) {
			console.error(error.message);
		}
	};

	console.log(pokemonList);

	return (
		<>
			<SortFilters pokemonList={pokemonList} setPokemonList={setPokemonList} />
			<div className='all-container'>
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
		</>
	);
};

export default AllPokemons;
