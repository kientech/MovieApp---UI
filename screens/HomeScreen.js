import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
  const [trending, setTrending] = useState([
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
    { id: 3, title: "Movie 3" },
  ]);

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
        <MoviesList title={"Upcoming"} data={trending} />
        <MoviesList title={"Top Rated"} data={trending} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
