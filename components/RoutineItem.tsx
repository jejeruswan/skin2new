import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RoutineItemProps } from "@/types/types";

export const RoutineItem: React.FC<RoutineItemProps> = ({
  title,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    display: "flex",
    marginTop: 17,
    width: 318,
    maxWidth: "100%",
    paddingLeft: 34,
    paddingRight: 6,
    paddingTop: 11,
    paddingBottom: 11,
    alignItems: "stretch",
    gap: 20,
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  titleText: {
    fontFamily: "Poppins",
    fontSize: 24,
    color: "#6B7698",
    fontWeight: "500",
    letterSpacing: -0.3,
  },
  image: {
    aspectRatio: 1,
    width: 44,
    flexShrink: 0,
    overflow: "hidden",
  },
});
