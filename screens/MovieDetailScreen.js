import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import TopCast from "../components/TopCast";
import MoviesList from "../components/MoviesList";
import axios from "axios"; // Import axios
import { api } from "../api";

const { width, height } = Dimensions.get("window");

const MovieDetailScreen = () => {
  const navigation = useNavigation();
  const [isFavorited, setIsFavorited] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  console.log("🚀 ~ MovieDetailScreen ~ similarMovies:", similarMovies);
  const route = useRoute();
  const { item } = route.params || {};

  const {
    title = "Unknown Title",
    release_date = "Unknown Release Date",
    vote_average = "5",
    genres = [],
    overview = "No description available.",
    poster_path = "https://via.placeholder.com/150",
    id,
  } = item || {};

  useEffect(() => {
    if (id) {
      // Replace with your actual API key and endpoint
      const fetchSimilarMovies = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/similar`,
            {
              params: {
                api_key: api,
                language: "en-US",
                page: 1,
              },
            }
          );
          setSimilarMovies(response.data.results);
        } catch (error) {
          console.error("Error fetching similar movies:", error);
        }
      };
      fetchSimilarMovies();
    }
  }, [id]);

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
              uri: `https://image.tmdb.org/t/p/original${poster_path}`,
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
          {title}
        </Text>
        <Text className="text-white text-center text-md">
          Released • {release_date.split("-")[0]} • {vote_average} / 10
        </Text>

        <View className="flex-row items-center justify-center gap-x-4 mt-2">
          {genres.map((genre) => (
            <View key={genre.id} className="px-4 py-2 rounded-lg bg-gray-100">
              <Text className="font-semibold text-md">{genre.name}</Text>
            </View>
          ))}
        </View>

        <View className="mx-4">
          <Text className="text-gray-300 leading-relaxed text-justify">
            {overview}
          </Text>
        </View>

        <View className="mt-12 mx-4">
          <TopCast />
        </View>

        <View className="mx-4 mt-6">
          <MoviesList data={similarMovies} title="Similar Movies" />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;
