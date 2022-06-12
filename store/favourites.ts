import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type FavouritesState = {
	ids: string[]
}

type FavouritePayload = {
	id: string
}

const initialState: FavouritesState = {
	ids: [],
}

const favouritesSlice = createSlice({
	name: "favourites",
	initialState,
	reducers: {
		addFavourites: (state, action: PayloadAction<FavouritePayload>) => {
			state.ids.push(action.payload.id)
		},
		removeFavourites: (state, action: PayloadAction<FavouritePayload>) => {
			return {
				ids: [...state.ids.filter(id => id !== action.payload.id)],
			}
		},
	},
})

export const { addFavourites, removeFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer
