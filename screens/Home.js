import React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";

function Home(props) {
	return (
		<SafeAreaView
			style={[
				{
					backgroundColor: "#eee",
					flex: 1,
					paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
				},
			]}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTab />
				<SearchBar />
			</View>
			<Categories />
		</SafeAreaView>
	);
}

export default Home;
