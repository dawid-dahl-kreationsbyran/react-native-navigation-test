import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import Meal from "../../models/meal"
import MealItem from "./MealItem"

type Props = {
	title?: string
	meals: Meal[]
}

const MealsList: React.FC<Props> = ({ title, meals }) => {
	const renderMealItem = (itemData: any) => {
		return <MealItem item={itemData} />
	}

	return (
		<View>
			<Text> {title && title}</Text>
			<FlatList
				data={meals}
				keyExtractor={meal => meal.id}
				renderItem={renderMealItem}
			/>
		</View>
	)
}

export default MealsList

const styles = StyleSheet.create({})
