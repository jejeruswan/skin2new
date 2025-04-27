import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { ProductCard } from "@/components/ProductCardSearch";

const products = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/75ef6f61bcfbdd6c5db8c48841edb0bbf8def420?placeholderIfAbsent=true",
    title: "The Ordinary Glucoside Foaming Cleanser, Gentle Foaming Face Wa...",
    type: "Foam",
    size: "5 Fl Oz",
    category: "Cleanser",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/164b7274f3fbf903a245532bb2cf26ecc410ee5e?placeholderIfAbsent=true",
    title:
      "Curel Japanese Skin Care Foaming Daily Face Wash for Sensitive Skin, Hyd...",
    type: "Foam",
    size: "5 Fl Oz",
    category: "Cleanser",
    hasRating: true,
  },
  {
    image:
      "https://images.pexels.com/photos/19585486/pexels-photo-19585486.jpeg",
    title: "La Roche-Posay Toleriane Hydrating Gentle Face Cleanser...",
    type: "Cream",
    size: "13.5 Fl Oz",
    category: "Cleanser",
  },
  {
    image: "https://images.pexels.com/photos/7691162/pexels-photo-7691162.jpeg",
    title: "Fresh Soy Face Cleanser with Cucumber Extract and Amino Acids...",
    type: "Gel",
    size: "5.1 Fl Oz",
    category: "Cleanser",
  },
  {
    image: "https://images.pexels.com/photos/6591431/pexels-photo-6591431.jpeg",
    title: "Youth To The People Superfood Antioxidant Cleanser with Kale...",
    type: "Gel",
    size: "8 Fl Oz",
    category: "Cleanser",
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/72e7f79613e69d9f71a48a28cfdf96888e7d7b1b?placeholderIfAbsent=true",
    title:
      "CeraVe Foaming Facial Cleanser, Daily Face Wash for Oily Skin with Hyal...",
    type: "Foam",
    size: "5 Fl Oz",
    category: "Cleanser",
    hasRating: true,
  },
];

export const ProductList = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
      <View style={styles.scrollBarContainer}>
        <View style={styles.scrollBar} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 26,
    padding: 20,
  },
  scrollBarContainer: {
    alignSelf: "stretch",
    marginTop: 20,
  },
  scrollBar: {
    borderRadius: 100,
    width: 5,
    height: 70,
    backgroundColor: "rgba(142, 157, 204, 0.2)",
  },
});
