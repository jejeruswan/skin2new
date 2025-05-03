import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type ProductCardProps = {
  name: string;
  price: string;
  image?: any; // For require() images
  imageUrl?: string; // For network images
  onPress?: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.content}>
        {image && <Image source={image} style={styles.image} />}
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={2}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <Feather name="chevron-right" size={22} color="#6B7698" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E6E7FA",
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: "#D1D5E4",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7698",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#8E95B2",
    fontWeight: "500",
  },
});