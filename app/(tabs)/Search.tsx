import React from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "@/components/StatusBar";
import { SearchHeader } from "@/components/SearchBar";
import { ProductList } from "@/components/ProductList";
import { Colors } from "@/constants/Colors";

export const SearchResults = () => {
  return (
    <View style={styles.container}>
          <StatusBar />
          <SearchHeader />
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 100,
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
});

export default SearchResults;
