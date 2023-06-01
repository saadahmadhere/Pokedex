import { v4 as uuidv4 } from 'uuid';
import { useFavourite } from '../../contexts/favourites';
import Card from '../../modules/Card';

const Favourites = () => {
	const { state } = useFavourite();
	return (
		<div className='main-feed'>
			{state.length === 0 ? (
				<h2>Favourites is empty</h2>
			) : (
				state.map((pokemon) => <Card key={uuidv4()} _pokemon={pokemon} />)
			)}
		</div>
	);
};

export default Favourites;
