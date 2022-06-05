import { Pressable, StyleSheet, View } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"

type Props = {}

const IconButton: React.FC<Props> = ({}: any) => {
	return (
		<View>
			<Pressable
				style={({ pressed }) => pressed && styles.pressable}
				onPress={() => console.log("Icon pressed!")}
			>
				<Ionicons name="star" color="white" size={24} />
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
