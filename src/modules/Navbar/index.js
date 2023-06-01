import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import { useFavourite } from '../../contexts/favourites';

const Navbar = ({ searchTerm, setSearchTerm }) => {
	const { state } = useFavourite();
	return (
		<div className='nav'>
			<Link to='/'>
				<span className='nav-logo'>Pokedex</span>
			</Link>
			<input
				type='text'
				className='nav-search'
				placeholder='Search by pokemon name or type'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className='nav-links'>
				<Link to='/all'>
					<span className='nav-fav'>All Pokemons</span>
				</Link>
				<Link to='/favourites'>
					<span className='nav-fav'>Favourites: {state.length}</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
