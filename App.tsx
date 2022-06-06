import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import IconButton from "./components/IconButton"
import { createDrawerNavigator } from "@react-navigation/drawer"
import FavouritesScreen from "./screens/FavouritesScreen"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const screenHeaderOptionsStack = {
	title: "Awesome Title",
	headerTintColor: "white",
	headerStyle: { backgroundColor: "coral" },
	contentStyle: { backgroundColor: "lightgray" },
}

const screenHeaderOptionsDrawer = {
	headerTintColor: "white",
	headerStyle: { backgroundColor: "coral" },
	sceneContainerStyle: {
		backgroundColor: "lightgray",
	},
}

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator screenOptions={screenHeaderOptionsDrawer}>
			<Drawer.Screen
				name="meals-categories"
				component={CategoriesScreen}
			></Drawer.Screen>
			<Drawer.Screen
				name="favourites"
				component={FavouritesScreen}
			></Drawer.Screen>
		</Drawer.Navigator>
	)
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator screenOptions={screenHeaderOptionsStack}>
					<Stack.Screen
						name="categories"
						component={DrawerNavigator}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="meals-overview"
						component={MealsOverviewScreen}
						options={({ route }: any) => {
							const categoryTitle =
								route.params.item && route.params.item.title
							return { title: categoryTitle }
						}}
					/>
					<Stack.Screen
						name="meals-detail"
						component={MealDetailScreen}
						options={{
							headerRight: () => <IconButton />,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	)
}

const styles = StyleSheet.create({
	headerButton: { color: "white" },
})
