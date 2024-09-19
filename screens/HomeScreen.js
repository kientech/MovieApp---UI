import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { api } from "../api";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../components/TrendingMovies";
import MoviesList from "../components/MoviesList";

const ios = Platform.OS === "ios";

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const [trendingResponse, upcomingResponse, topRatedResponse] =
          await Promise.all([
            axios.get(
              `https://api.themoviedb.org/3/movie/popular?api_key=${api}`
            ),
            axios.get(
              `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}`
            ),
            axios.get(
              `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}`
            ),
          ]);

        console.log(
          "🚀 ~ fetchMovies ~ trendingResponse:",
          trendingResponse.data.results
        );
        console.log(
          "🚀 ~ fetchMovies ~ upcomingResponse:",
          upcomingResponse.data.results
        );
        console.log(
          "🚀 ~ fetchMovies ~ topRatedResponse:",
          topRatedResponse.data.results
        );

        setTrending(trendingResponse.data.results);
        setUpcoming(upcomingResponse.data.results);
        setTopRated(topRatedResponse.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <View className="flex-1 bg-neutral-800">
      {/* search bar and logo */}
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />

        <View className="mx-4 flex-row items-center justify-between">
          <Bars3BottomLeftIcon strokeWidth={2} size={30} color={"white"} />
          <Text className="text-white font-bold text-3xl">
            <Text className="text-[#eab308]">M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
            <MagnifyingGlassIcon strokeWidth={2} size={30} color={"white"} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        {showSearch && (
          <View className="mx-4 mt-3">
            <TextInput
              className="bg-neutral-600 p-4 rounded-lg text-white"
              placeholder="Search movies..."
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              autoFocus={true}
            />
          </View>
        )}
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <TrendingMovies data={trending} />
        <MoviesList title={"Upcoming"} data={upcoming} />
        <MoviesList title={"Top Rated"} data={topRated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
