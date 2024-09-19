import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const MoviesList = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <View className="mx-4 mt-8">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white font-semibold text-xl">{title}</Text>
        <TouchableOpacity onPress={() => Alert.alert("See all clicked!!!")}>
          <Text className="text-yellow-500 font-semibold text-md">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("MovieDetail", { item })}
          >
            <View className="space-y-2 mr-4">
              <Image
                source={{
                  uri: "https://cdn.dribbble.com/userupload/13118797/file/original-1e5547ee543e16d45adcf5a046148e57.png?resize=1504x1128",
                }}
                style={{
                  height: screenHeight * 0.2,
                  width: screenWidth * 0.33,
                }}
                className="object-cover rounded-md"
              />
              <Text className="font-base text-md text-white">{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoviesList;
