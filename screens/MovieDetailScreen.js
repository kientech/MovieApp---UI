import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import TopCast from "../components/TopCast";
import MoviesList from "../components/MoviesList";

const { width, height } = Dimensions.get("window");

const MovieDetailScreen = () => {
  const navigation = useNavigation();
  const [isFavorited, setIsFavorited] = useState(false);
  const similar = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ];

  const route = useRoute();
  const { item } = route.params || {};

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView className="absolute px-4 z-20 w-full flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-lg bg-yellow-600 ml-4"
            accessibilityLabel="Go back"
          >
            <ChevronLeftIcon size={30} color={"white"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsFavorited(!isFavorited)}
            className="p-2 rounded-lg"
            accessibilityLabel={
              isFavorited ? "Remove from favorites" : "Add to favorites"
            }
          >
            <HeartIcon color={isFavorited ? "red" : "white"} size={35} />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri: "https://cdn.dribbble.com/userupload/12845014/file/original-b4aa4a169dd07d08c5ab232669066f02.png?resize=1504x1127",
            }}
            style={{
              height: height * 0.55,
              width: width,
            }}
            className="rounded-lg object-cover"
          />
          <LinearGradient
            colors={[
              "transparent",
              "rgba(23, 23, 23, 0.8)",
              "rgba(23, 23, 23, 1)",
            ]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>

      <View
        style={{
          marginTop: -(height * 0.09),
        }}
        className="space-y-4"
      >
        <Text className="text-white text-center font-bold text-3xl tracking-wider">
          Hello
        </Text>
        <Text className="text-white text-center text-md">
          Released • 2020 • 170 mins{" "}
        </Text>

        <View className="flex-row items-center justify-center gap-x-4 mt-2">
          <View className="px-4 py-2 rounded-lg bg-gray-100">
            <Text className="font-semibold text-md">Action</Text>
          </View>

          <View className="px-4 py-2 rounded-lg bg-gray-100">
            <Text className="font-semibold text-md">Action</Text>
          </View>

          <View className="px-4 py-2 rounded-lg bg-gray-100">
            <Text className="font-semibold text-md">Action</Text>
          </View>
        </View>

        <View className="mx-4">
          <Text className="text-gray-300 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            placeat laboriosam unde! Soluta aperiam hic dolorem iure incidunt
            maiores consequuntur nostrum sit illum eos obcaecati, doloribus
            ipsam! Exercitationem, qui tenetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptates placeat laboriosam unde!
            Soluta aperiam hic dolorem iure incidunt maiores consequuntur
            nostrum sit illum eos obcaecati, doloribus ipsam! Exercitationem,
            qui tenetur.
          </Text>
        </View>
        <View className="mt-12 mx-4 ">
          <TopCast />
        </View>
        <View>
          <MoviesList data={similar} title="Similar" />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
