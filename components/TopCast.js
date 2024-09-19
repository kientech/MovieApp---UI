import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const data = [
  {
    id: 0,
    avatarCast:
      "https://cdn.dribbble.com/userupload/9196190/file/original-58d831852cf3b0b4adde57163b673d02.png?resize=1504x1128",
    nameCast: "John Wick",
  },
  {
    id: 1,
    avatarCast:
      "https://cdn.dribbble.com/userupload/9196190/file/original-58d831852cf3b0b4adde57163b673d02.png?resize=1504x1128",
    nameCast: "John Wick",
  },
  {
    id: 2,
    avatarCast:
      "https://cdn.dribbble.com/userupload/9196190/file/original-58d831852cf3b0b4adde57163b673d02.png?resize=1504x1128",
    nameCast: "John Wick",
  },
  {
    id: 3,
    avatarCast:
      "https://cdn.dribbble.com/userupload/9196190/file/original-58d831852cf3b0b4adde57163b673d02.png?resize=1504x1128",
    nameCast: "John Wick",
  },
];

const TopCast = () => {
  return (
    <View>
      <Text className="font-semibold text-white text-xl mb-2">TopCast</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-x-4"
      >
        {data.map((item, index) => (
          <View key={index}>
            <Image
              source={{ uri: item.avatarCast }}
              className="w-24 h-24 rounded-lg"
            />
            <Text className="my-2 text-center text-white font-semibold text-md ">
              {item.nameCast}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopCast;
