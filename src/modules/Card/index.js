import '../../styles/card.css';

const Card = ({ pokemonDetails }) => {
	console.log(pokemonDetails);
	return (
		<div className='card'>
			<div className='card-img'>
				<img src='https://via.placeholder.com/600/92c952' alt='pokemon' />
			</div>
			<div className='card-about'>
				<div className='card-about-content'>
					<span className='card-title'>Name:</span>
					<span className='card-subtitle'>Pokemon</span>
				</div>
				<div className='card-about-content'>
					<span className='card-title'>Type:</span>
					<span className='card-subtitle'>Pokemon</span>
				</div>
				<div className='card-about-content'>
					<span className='card-title'>Height:</span>
					<span className='card-subtitle'>Pokemon</span>
				</div>
				<div className='card-about-content'>
					<span className='card-title'>Weight:</span>
					<span className='card-subtitle'>Pokemon</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
