import React from "react";
import { View, StyleSheet } from "react-native";
import { RoutineItem } from "./RoutineItem";

const routineItems = [
  { title: "Cleanser", imageUrl: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/cc2081c89b9421501a26bda1b4a7878569ee866a?placeholderIfAbsent=true" },
  { title: "Exfoliator", imageUrl: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/cc2081c89b9421501a26bda1b4a7878569ee866a?placeholderIfAbsent=true" },
  { title: "Serum", imageUrl: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/cc2081c89b9421501a26bda1b4a7878569ee866a?placeholderIfAbsent=true" },
  { title: "Moisturizer", imageUrl: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/cc2081c89b9421501a26bda1b4a7878569ee866a?placeholderIfAbsent=true" },
  { title: "Sunscreen", imageUrl: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/cc2081c89b9421501a26bda1b4a7878569ee866a?placeholderIfAbsent=true" },
];

export const RoutineItemList: React.FC = () => {
  return (
    <View style={styles.container}>
      {routineItems.map((item, index) => (
        <RoutineItem key={index} title={item.title} imageUrl={item.imageUrl} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
});
