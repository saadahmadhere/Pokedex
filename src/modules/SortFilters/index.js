import '../../styles/sortFilters.css';
const SortFilters = ({ pokemonList, setPokemonList }) => {
	const handleFilterClick = (filterName) => {
		switch (filterName) {
			case 'AtoZ':
				break;
			case 'ZtoA':
				break;
			case 'shortToTall':
				break;
			case 'tallToShort':
				break;
			case 'lightToHeavy':
				break;
			case 'heavyToLight':
				break;
			default:
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
