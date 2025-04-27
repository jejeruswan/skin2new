import React, { useState } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "./StatusBar";
import { SearchHeader } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCardSearch";
import { commonStyles } from "@/constants/Theme";

const SearchResults: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const products = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/75ef6f61bcfbdd6c5db8c48841edb0bbf8def420?placeholderIfAbsent=true",
      title:
        "The Ordinary Glucoside Foaming Cleanser, Gentle Foaming Face Wa...",
      tags: ["Foam", "5 Fl Oz", "Cleanser"],
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/164b7274f3fbf903a245532bb2cf26ecc410ee5e?placeholderIfAbsent=true",
      title:
        "Curel Japanese Skin Care Foaming Daily Face Wash for Sensitive Skin, Hyd...",
      tags: ["Foam", "5 Fl Oz", "Cleanser"],
      hasRating: true,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/72e7f79613e69d9f71a48a28cfdf96888e7d7b1b?placeholderIfAbsent=true",
      title:
        "CeraVe Foaming Facial Cleanser, Daily Face Wash for Oily Skin with Hyal...",
      tags: ["Foam", "5 Fl Oz", "Cleanser"],
      hasRating: true,
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/75ef6f61bcfbdd6c5db8c48841edb0bbf8def420?placeholderIfAbsent=true",
      title:
        "The Ordinary Glucoside Foaming Cleanser, Gentle Foaming Face Wa...",
      tags: ["Foam", "5 Fl Oz", "Cleanser"],
      hasRating: true,
    },
  ];

  return (
    <View style={[commonStyles.container, styles.container]}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <StatusBar />
          <SearchHeader
            searchText={searchText}
            onSearchChange={setSearchText}
          />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            tags={product.tags}
            hasRating={product.hasRating}
          />
        ))}
        <Image source={{ uri: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/c091bacbca4ceefa6dc3c7a3e810082f5cc0c2b5?placeholderIfAbsent=true" }} style={styles.bottomImage} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
  },
  headerContent: {
    width: "100%",
    paddingLeft: 8,
    paddingRight: 26,
    paddingTop: 22,
    paddingBottom: 9,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 15,
    alignItems: "center",
  },
  bottomImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 20,
    marginTop: 26,
  },
});

export default SearchResults;
