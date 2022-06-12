import {
	GestureResponderEvent,
	Pressable,
	StyleSheet,
	View,
} from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"

type Props = {
	pressHandler: (event: GestureResponderEvent) => void
	icon: "star" | "star-outline"
}

const IconButton: React.FC<Props> = ({ pressHandler, icon }) => {
	return (
		<View>
			<Pressable
				style={({ pressed }) => pressed && styles.pressable}
				onPress={pressHandler}
			>
				<Ionicons name={icon} color="white" size={24} />
			</Pressable>
		</View>
	)
}

export default IconButton

const styles = StyleSheet.create({
	pressable: {
		opacity: 0.7,
	},
})
