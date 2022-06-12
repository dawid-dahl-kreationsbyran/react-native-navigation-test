import { StyleSheet, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import React from "react"
import MealsList from "../components/MealsList/MealsList"

type Props = {}

const MealsOverviewScreen: React.FC<Props> = ({ route }: any) => {
	const categoryId = route.params.item.id as any

	const mealsInCategory = MEALS.filter(meal =>
		meal.categoryIds.includes(categoryId)
	)

	return (
		<View style={styles.container}>
			<MealsList title={"Meals overview!"} meals={mealsInCategory} />
		</View>
	)
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
})
