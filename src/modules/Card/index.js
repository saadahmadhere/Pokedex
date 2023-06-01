import { useFavourite } from '../../contexts/favourites';
import '../../styles/card.css';

const Card = ({ _pokemon }) => {
	const {
		name,
		weight,
		height,
		types,
		sprites: {
			other: {
				'official-artwork': { front_default: imgUrl },
			},
		},
	} = _pokemon;
	const { dispatch, inFavouriteList } = useFavourite();

	const typeList = types.map((type) => type.type.name);

	const handleAddtoFavourite = () =>
		dispatch({ type: 'ADD_TO_FAVOURITES', payload: _pokemon });

	const handleRemoveFromfavourite = () =>
		dispatch({ type: 'REMOVE_FROM_FAVOURITES', payload: name });

	return (
		<div className='card'>
			<div className='card-img'>
				<img src={imgUrl} alt='pokemon' />
			</div>
			<div className='card-about'>
				<div className='card-about-content'>
					<span className='card-title'>Name: </span>
					<span className='card-subtitle'>{name}</span>
				</div>
				<div className='card-about-content'>
					<span className='card-title'>Type:</span>
					<span className='card-subtitle'>
						{typeList.map(
							(type, index, arr) =>
								`${type}${index < arr.length - 1 ? ', ' : ''}`
						)}
					</span>
				</div>
				<div className='card-about-content'>
					<span className='card-title'>Height:</span>
					<span className='card-subtitle'>{height}</span>
				</div>
				<div className='card-about-content'>
					<span className='card-title'>Weight:</span>
					<span className='card-subtitle'>{weight}</span>
				</div>
				{!inFavouriteList(name) ? (
					<button onClick={handleAddtoFavourite} className='btn-fav'>
						Add to Favourites
					</button>
				) : (
					<button onClick={handleRemoveFromfavourite} className='btn-fav'>
						Remove from Favourites
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
