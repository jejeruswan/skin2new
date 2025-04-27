import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors, typography1 } from "@/constants/Theme";

interface ProductCardProps {
  image: string;
  title: string;
  tags: string[];
  hasRating?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  tags,
  hasRating = false,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          {hasRating && (
            <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/2f5cb1eaea4ef05efc9208ebdfdc77a0a1fc105d?placeholderIfAbsent=true" }} style={styles.ratingImage} />
          )}
        </View>
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "stretch",
    gap: 11,
    overflow: "hidden",
    height: 120,
    padding: 12,
    maxWidth: 400,
    width: "100%",
  },
  productImage: {
    width: 103,
    height: 103,
    resizeMode: "contain",
  },
  content: {
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
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: -0.3,
    fontFamily: typography1.poppins,
  },
  ratingImage: {
    width: 44,
    height: 44,
    marginTop: 31,
  },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 5,
    gap: 9,
  },
  tag: {
    flex: 1,
  },
  tagText: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: "300",
    letterSpacing: -0.61,
    fontFamily: typography1.poppins,
  },
});
