import { FlatList, ListRenderItem, StyleSheet, View } from "react-native"
import React from "react"
import CategoryTile from "../components/CategoryTile"
import { CATEGORIES } from "../data/dummy-data"
import { ICategory } from "../models/category"
import { NavigationContainer } from "@react-navigation/native"

type Props = {}

const CategoriesScreen: React.FC<Props> = ({ navigation }: any) => {
	const renderItem: ListRenderItem<ICategory> = ({ item }) => {
		const pressHandler = () => {
			navigation.navigate("meals-overview", {
				item: item,
			})
		}

		return (
			<>
				<CategoryTile
					id={item.id}
					title={item.title}
					color={item.color}
					onPress={pressHandler}
				/>
			</>
		)
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={CATEGORIES}
				keyExtractor={key => key.id}
				renderItem={renderItem}
				numColumns={2}
			/>
		</View>
	)
}

export default CategoriesScreen

const styles = StyleSheet.create({
	container: {
		marginTop: 64,
	},
})
