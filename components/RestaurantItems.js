import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

function RestaurantItems(props) {
	return (
		<TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
			{props.restaurantData.map((restaurant, index) => (
				<View
					key={index}
					style={{
						backgroundColor: "white",
						marginTop: 10,
						padding: 15,
						// borderRadius: 20,
						// marginBottom: 30,
					}}>
					<RestaurantImage Image={restaurant.image_url} />
					<RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
				</View>
			))}
		</TouchableOpacity>
	);
}

const RestaurantImage = (props) => (
	<>
		<Image
			style={{ height: 180, width: "100%" }}
			source={{
				uri: props.Image,
			}}
		/>
		<TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
			<MaterialCommunityIcons name="heart-outline" size={25} color="white" />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = (props) => (
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 10,
		}}>
		<View>
			<Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
			<Text style={{ fontSize: 13, color: "grey" }}>35-40 • min</Text>
		</View>
		<View
			style={{
				height: 30,
				width: 30,
				backgroundColor: "#eee",
				borderRadius: 10,
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Text>{props.rating}</Text>
		</View>
	</View>
);

export const localRestaurant = [
	{
		name: "Hichki",
		image_url:
			"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
		Categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1399,
		rating: 3.5,
	},
	{
		name: "Penensula",
		image_url:
			"https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
		Categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1599,
		rating: 4.5,
	},
	{
		name: "Hichki",
		image_url:
			"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
		Categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1259,
		rating: 5,
	},
	{
		name: "Hichki",
		image_url:
			"https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=",
		Categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1399,
		rating: 3.5,
	},
];

export default RestaurantItems;
