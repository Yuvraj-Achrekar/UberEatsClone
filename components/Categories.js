import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const items = [
	{
		Image: require("../assets/images/shopping-bag.png"),
		Text: "Pick-up",
	},
	{
		Image: require("../assets/images/soft-drink.png"),
		Text: "Soft Drinks",
	},
	{
		Image: require("../assets/images/bread.png"),
		Text: "Bakery Items",
	},
	{
		Image: require("../assets/images/fast-food.png"),
		Text: "Fast Food",
	},
	{
		Image: require("../assets/images/deals.png"),
		Text: "Deals",
	},
	{
		Image: require("../assets/images/coffee.png"),
		Text: "Coffee & Tea",
	},
	{
		Image: require("../assets/images/desserts.png"),
		Text: "Desserts",
	},
];
function Categories(props) {
	return (
		<View
			style={{
				marginTop: 5,
				backgroundColor: "white",
				paddingVertical: 10,
				paddingLeft: 20,
			}}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{items.map((items, index) => (
					<View key={index} style={{ alignItems: "center", marginRight: 30 }}>
						<Image
							source={items.Image}
							style={{
								width: 50,
								height: 40,
								resizeMode: "contain",
							}}
						/>
						<Text style={{ fontSize: 13, fontWeight: "900" }}>
							{items.Text}
						</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
}

export default Categories;
