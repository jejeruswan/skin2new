import React from "react";
import { View, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { ProductCardProps } from "@/types/types";

export const ProductCard = ({ image, title }: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 128,
    backgroundColor: "#EFF0FF",
    overflow: "hidden",
    borderRadius: 17,
    position: "relative",
  },
  image: {
    width: 170,
    height: 100,
    objectFit: "fill",
    resizeMode: "cover",
    justifyContent: "center",
    left: -27,
    top: -2,
    shadowColor: "#8E9DCC",
    shadowOffset: {
      width: -1,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9.2,
    elevation: 5,
  },
  title: {
    bottom: 6,
    left: 3,
    fontSize: 10,
    color: "#6B7698",
    position: "absolute"
  },
});