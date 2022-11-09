import React from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	View,
} from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItems, {
	localRestaurant,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

function Home(props) {
	const [restaurantData, setRestaurantData] = React.useState(localRestaurant);

	return (
		<SafeAreaView
			style={{
				backgroundColor: "#eee",
				flex: 1,
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
			}}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTab />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurantData={restaurantData} />
			</ScrollView>
		</SafeAreaView>
	);
}

export default Home;
