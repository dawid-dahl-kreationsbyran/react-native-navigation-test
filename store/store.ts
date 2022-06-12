import { configureStore } from "@reduxjs/toolkit"
import favouritesReducer from "./favourites"

export const store = configureStore({
	reducer: {
		favouritesReducer: favouritesReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
