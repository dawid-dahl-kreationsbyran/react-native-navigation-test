import { Platform, StyleSheet, Text, View } from "react-native"
import React from "react"
import { ICategory } from "../models/category"
import Meal from "../models/meal"
import MealDetail from "../components/MealDetail"

type Props = {}

const MealDetailScreen: React.FC<Props> = ({ route }: any) => {
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
