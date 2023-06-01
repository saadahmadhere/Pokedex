const favoritesReduer = (state = [], action) => {
	const { type, payload } = action;

	switch (type) {
		case 'ADD_TO_FAVOURITES':
			return [...state, payload];
		case 'REMOVE_FROM_FAVOURITES':
			const newState = state.filter((pokemon) => pokemon.name !== payload);
			return newState;
		default:
			return state;
	}
};

export default favoritesReduer;
