import React from "react";
import { View, StyleSheet } from "react-native";
import { ProductCard } from "@/components/ProductCardSearch";
import { useRouter } from "expo-router";

const savedProducts = [
  {
    id: 1,
    name: "Beauty of Joseon Glow Serum",
    price: "$17.00",
    image: require("@/assets/images/product1.jpg"),
  },
  {
    id: 2,
    name: "COSRX Snail Mucin Essence",
    price: "$25.00",
    image: require("@/assets/images/product2.webp"),
  },
  {
    id: 3,
    name: "Anua Heartleaf Toner",
    price: "$22.00",
    image: require("@/assets/images/product3.webp"),
  },
  {
    id: 4,
    name: "Body Shop Vitamin E Toner",
    price: "$22.00",
    image: require("@/assets/images/product4.webp"),
  },  {
    id: 5,
    name: "Innisfree Sunscreen",
    price: "$22.00",
    image: require("@/assets/images/product5.webp"),
  },
];

export const ProductList = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {savedProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onPress={() => {
            // Navigate to product details or handle press
            console.log(`Pressed ${product.name}`);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    gap: 14,
  },
});