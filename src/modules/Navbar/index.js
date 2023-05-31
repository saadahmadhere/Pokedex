import '../../styles/navbar.css';

const Navbar = () => {
	return (
		<div className='nav'>
			<span className='nav-logo'>Pokedex</span>
			<input
				type='text'
				className='nav-search'
				placeholder='Search by pokemon name or type'
			/>
			<span className='nav-fav'>Favourites</span>
		</div>
	);
};

export default Navbar;
