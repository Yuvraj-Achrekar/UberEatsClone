import React from "react";
import { Platform, SafeAreaView, StatusBar, Text, View } from "react-native";
import HeaderTab from "../components/HeaderTab";

function Home(props) {
	return (
		<SafeAreaView
			style={[
				{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
			]}>
			<HeaderTab />
		</SafeAreaView>
	);
}

export default Home;
