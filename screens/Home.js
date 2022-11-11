import React, { useEffect, useState } from "react";
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

const YELP_API_KEY =
	"6cCcswm8Bqir4uwotITXGpz1YXDvxxBC91P4OMRvQkruzXUDFkemhJ9HfmD4-byhOl20tt31JjPyqCuuIPOsvlxpxBLazlW_fzButpB18P4J8P7cLOecZgV124trY3Yx";

function Home(props) {
	const [restaurantData, setRestaurantData] = useState(localRestaurant);
	const [city, setCity] = useState("San Diego");

	const getRestaurantsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) => setRestaurantData(json.businesses));
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, [city]);

	return (
		<SafeAreaView
			style={{
				backgroundColor: "#eee",
				flex: 1,
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
			}}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTab />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurantData={restaurantData} />
			</ScrollView>
		</SafeAreaView>
	);
}

export default Home;
