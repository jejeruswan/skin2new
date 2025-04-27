import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface ProductCardProps {
  image: string;
  title: string;
  type: string;
  size: string;
  category: string;
  hasRating?: boolean;
}

export const ProductCard = ({
  image,
  title,
  type,
  size,
  category,
  hasRating = false,
}: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          {hasRating && (
            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/2f5cb1eaea4ef05efc9208ebdfdc77a0a1fc105d?placeholderIfAbsent=true" }} style={styles.ratingIcon} />
          )}
        </View>
        <View style={styles.tagsContainer}>
          <Text style={styles.tag}>{type}</Text>
          <Text style={styles.tag}>{size}</Text>
          <Text style={styles.tag}>{category}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E7FA",
    borderRadius: 22,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productImage: {
    width: 103,
    height: 103,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    marginTop: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 17,
  },
  title: {
    flex: 1,
    color: "rgba(107, 118, 152, 1)",
    fontSize: 15,
    fontFamily: "Poppins",
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.3,
  },
  ratingIcon: {
    width: 44,
    height: 44,
    marginTop: 31,
  },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 16,
    gap: 9,
  },
  tag: {
    fontSize: 11,
    color: "rgba(142, 157, 204, 1)",
    fontFamily: "Poppins",
    fontWeight: "300",
    letterSpacing: -0.61,
  },
});
