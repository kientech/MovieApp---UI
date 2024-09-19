import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{
          uri: "https://cdn.dribbble.com/userupload/12845014/file/original-b4aa4a169dd07d08c5ab232669066f02.png?resize=1504x1127",
        }}
        style={{
          height: screenHeight * 0.4,
          width: screenWidth * 0.7,
        }}
        className="rounded-lg object-cover"
      />
    </TouchableWithoutFeedback>
  );
};

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("MovieDetail", { item });
  };

  return (
    <View>
      <Text className="text-white text-xl mx-4 mt-8 mb-4 font-semibold">
        Trending Movies
      </Text>

      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.7}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

export default TrendingMovies;
