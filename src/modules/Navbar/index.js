import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
	return (
		<div className='nav'>
			<Link to='/'>
				<span className='nav-logo'>Pokedex</span>
			</Link>
			<input
				type='text'
				className='nav-search'
				placeholder='Search by pokemon name or type'
			/>
			<Link to='/favourites'>
				<span className='nav-fav'>Favourites</span>
			</Link>
		</div>
	);
};

export default Navbar;
