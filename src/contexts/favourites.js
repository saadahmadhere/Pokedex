import { createContext, useContext, useReducer } from 'react';
import favoritesReduer from '../reducers/favourites';

const FavouritesContext = createContext([]);

const useFavourite = () => useContext(FavouritesContext);
const initialState = [];

const FavouritesProvider = ({ children }) => {
	const [state, dispatch] = useReducer(favoritesReduer, initialState);

	const inFavouriteList = (name) =>
		state.find((pokemon) => pokemon.name === name);

	return (
		<FavouritesContext.Provider value={{ state, dispatch, inFavouriteList }}>
			{children}
		</FavouritesContext.Provider>
	);
};

export { useFavourite, FavouritesProvider };
