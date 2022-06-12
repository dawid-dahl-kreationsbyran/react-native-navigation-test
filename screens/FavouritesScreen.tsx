import { StyleSheet, Text, View } from "react-native"
import React from "react"
import MealsList from "../components/MealsList/MealsList"
import Meal from "../models/meal"
import { MEALS } from "../data/dummy-data"
import { useAppSelector } from "../hooks/reduxHooks"

type Props = {}

const FavouritesScreen: React.FC<Props> = ({ route }: any) => {
	const mealFavouriteIds = useAppSelector(
		state => state.favouritesReducer.ids
	)

	const mealsInCategory = MEALS.filter(meal =>
		mealFavouriteIds.includes(meal.id)
	)

	return (
		<>
			<Text>Favourites Screen!</Text>
			<View style={styles.container}>
				<MealsList meals={mealsInCategory} />
			</View>
		</>
	)
}

export default FavouritesScreen

const styles = StyleSheet.create({
	container: {},
})
