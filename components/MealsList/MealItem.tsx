import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import Meal from "../../models/meal"
import { useNavigation } from "@react-navigation/core"

type Props = {
	item: Meal
}

const onPress = (navigation: any, item: any) => () => {
	navigation.navigate("meals-detail", item)
}

const MealItem: React.FC<Props> = ({ item }: any) => {
	const navigation = useNavigation()

	return (
		<View style={[styles.outerContainer, { backgroundColor: "red" }]}>
			<Pressable
				android_ripple={{ color: "white" }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={onPress(navigation, item.item)}
			>
				<View style={styles.innerContainer}>
					<Text style={styles.text}>{item.item.title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

export default MealItem

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
