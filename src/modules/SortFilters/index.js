import '../../styles/sortFilters.css';
const SortFilters = ({ pokemonList, setPokemonList }) => {
	const handleFilterClick = (filterName) => {
		switch (filterName) {
			case 'AtoZ':
			case 'ZtoA':
				setPokemonList((prev) => {
					const newArr = [...prev];
					newArr.sort((a, b) => {
						const nameA = a.name.toUpperCase();
						const nameB = b.name.toUpperCase();
						if (nameA < nameB) {
							return filterName === 'AtoZ' ? -1 : 1;
						}
						if (nameA > nameB) {
							return filterName === 'AtoZ' ? 1 : -1;
						}
						return 0;
					});
					return newArr;
				});
				break;
			case 'shortToTall':
			case 'tallToShort':
				setPokemonList((prev) => {
					const newArr = [...prev];
					newArr.sort((a, b) =>
						filterName === 'shortToTall'
							? a.height - b.height
							: b.height - a.height
					);

					return newArr;
				});
				break;
			case 'lightToHeavy':
			case 'heavyToLight':
				setPokemonList((prev) => {
					const newArr = [...prev];
					newArr.sort((a, b) =>
						filterName === 'lightToHeavy'
							? a.weight - b.weight
							: b.weight - a.weight
					);
					return newArr;
				});
				break;
			default:
				return pokemonList;
		}
	};

	return (
		<div className='sort-filters-container'>
			<span className='sort-title'>SortBy:</span>
			<div className='sort-btn-container'>
				<button type='button' onClick={() => handleFilterClick('AtoZ')}>
					Name: A-Z
				</button>
				<button type='button' onClick={() => handleFilterClick('ZtoA')}>
					Name: Z-A
				</button>
				<button type='button' onClick={() => handleFilterClick('shortToTall')}>
					Height: Short to Tall
				</button>
				<button type='button' onClick={() => handleFilterClick('tallToShort')}>
					Height: Tall to Short
				</button>
				<button type='button' onClick={() => handleFilterClick('lightToHeavy')}>
					Weight: Light to Heavy
				</button>
				<button type='button' onClick={() => handleFilterClick('heavyToLight')}>
					Weight: Heavy to Light
				</button>
			</div>
		</div>
	);
};

export default SortFilters;
