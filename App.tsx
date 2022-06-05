import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from "./screens/MealsOverviewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import IconButton from "./components/IconButton"

const Stack = createNativeStackNavigator()

const screenHeaderOptions = {
	title: "Awesome Title",
	headerTintColor: "white",
	headerStyle: { backgroundColor: "coral" },
	contentStyle: { backgroundColor: "lightgray" },
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator screenOptions={screenHeaderOptions}>
					<Stack.Screen
						name="meals-categories"
						component={CategoriesScreen}
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
