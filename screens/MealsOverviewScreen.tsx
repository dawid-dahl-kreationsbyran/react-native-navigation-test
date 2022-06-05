import { StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import React from "react"

type Props = {}

const MealsOverviewScreen: React.FC<Props> = ({ route }: any) => {
	console.log(route.params.yo)
	return (
		<View style={styles.container}>
			<Text>MealsOverviewScreen</Text>
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
