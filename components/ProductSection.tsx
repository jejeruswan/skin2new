import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ProductCard } from "./ProductCard";
import { ProductSectionProps } from "@/types/types";

export const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.productsContainer}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: "#F6F6F5",
    fontWeight: "600",
    marginBottom: 15,
  },
  scrollView: {
    flexGrow: 0,
  },
  productsContainer: {
    flexDirection: "row",
    gap: 18,
  },
});
