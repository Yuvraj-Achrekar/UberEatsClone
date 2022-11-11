import React from "react";
import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "react-native-vector-icons";
import { AntDesign } from "react-native-vector-icons";

function SearchBar({ cityHandler }) {
	return (
		<View
			style={{
				marginTop: 15,
				flexDirection: "row",
			}}>
			<GooglePlacesAutocomplete
				query={{ key: "AIzaSyBzPiZy-x0H9FYg1fvWYYT_VpHZBrU4Qk4" }}
				onPress={(data, details = null) => {
					console.log(data.description);
					const city = data.description.split(",")[0];
					cityHandler(city);
				}}
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: "#eee",
						borderRadius: 20,
						fontWeight: "700",
						marginTop: 7,
					},
					textInputContainer: {
						backgroundColor: "#eee",
						borderRadius: 20,
						flexDirection: "row",
						alignItems: "center",
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View
						style={{
							marginLeft: 10,
						}}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							backgroundColor: "white",
							marginRight: 8,
							borderRadius: 30,
							padding: 8,
							flexDirection: "row",
							alignItems: "center",
						}}>
						<AntDesign
							name="clockcircle"
							size={11}
							style={{ marginRight: 6 }}
						/>
						<Text>Search</Text>
					</View>
				)}
			/>
		</View>
	);
}

export default SearchBar;
