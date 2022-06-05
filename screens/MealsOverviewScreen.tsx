import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import React from "react"
import MealItem from "../components/MealItem"
import Meal from "../models/meal"

type Props = {}

const MealsOverviewScreen: React.FC<Props> = ({ route }: any) => {
	const categoryId = route.params.item.id as any

	const mealsInCategory = MEALS.filter(meal =>
		meal.categoryIds.includes(categoryId)
	)

	const renderMealItem = (itemData: any) => {
		return <MealItem item={itemData} />
	}

	return (
		<View style={styles.container}>
			<Text>MealsOverviewScreen</Text>
			<FlatList
				data={mealsInCategory}
				keyExtractor={meal => meal.id}
				renderItem={renderMealItem}
			/>
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
