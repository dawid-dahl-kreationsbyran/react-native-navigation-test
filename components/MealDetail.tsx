import { Platform, ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"

type Props = {
	meal: any
}

const MealDetail: React.FC<Props> = ({ meal }: any) => {
	return (
		<View style={[styles.outerContainer, { backgroundColor: "red" }]}>
			<View style={styles.innerContainer}>
				<Text style={styles.text}>{meal.title}</Text>
				<ScrollView>
					{meal.steps.map((line: string) => (
						<Text
							key={Math.random()}
							style={styles.ingredientLine}
						>{`* ${line}`}</Text>
					))}
				</ScrollView>
			</View>
		</View>
	)
}

export default MealDetail

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
		marginVertical: 24,
	},
	ingredientLine: {
		color: "white",
		marginHorizontal: 24,
	},
})
