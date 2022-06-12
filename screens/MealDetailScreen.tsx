import { Platform, StyleSheet, Text, View } from "react-native"
import React, { useLayoutEffect } from "react"
import MealDetail from "../components/MealDetail"
import IconButton from "../components/IconButton"
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks"
import { addFavourites, removeFavourites } from "../store/favourites"

type Props = {}

const MealDetailScreen: React.FC<Props> = ({ route, navigation }: any) => {
	const favoriteMealIds = useAppSelector(state => state.favouritesReducer.ids)
	const dispatch = useAppDispatch()

	const isMealFavourite = favoriteMealIds.includes(route.params.id)

	const handleFavouritesPress = () => {
		if (isMealFavourite) {
			dispatch(removeFavourites({ id: route.params.id }))
		} else {
			dispatch(addFavourites({ id: route.params.id }))
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={isMealFavourite ? "star" : "star-outline"}
					pressHandler={handleFavouritesPress}
				/>
			),
		})
	})

	return <MealDetail meal={route.params} />
}

export default MealDetailScreen

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		height: 148,
		borderRadius: 10,
		margin: 8,
		elevation: 8,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontWeight: "bold",
		color: "white",
	},
})
