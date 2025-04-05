import React from "react";
import { View, Image, StyleSheet } from "react-native";

export const FeaturedBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2ea71c569278f39bc6d7584e9b452daae2f6240" }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#EFF0FF",
    paddingVertical: 16,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 199,
    height: 119,
  },
});