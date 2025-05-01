import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

export const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/c45bd1058c8201f8982a409a2d52d0eb364af46b?placeholderIfAbsent=true",
          }}
          style={styles.backIcon}
        />
        <View style={styles.searchInputContainer}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/359ecf47155ce4f8a515873e6826232a6f48823b?placeholderIfAbsent=true",
            }}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for skincare products..."
            style={styles.searchInput}
            onSubmitEditing={(event) => {
              console.log("Search:", event.nativeEvent.text);
            }}
          />
        </View>
      </View>
      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/9ebead7fe6d840afa98c8d4eed64d9de/930f4b3e80e8ae36d05f014efb346005de2bdf2f?placeholderIfAbsent=true",
        }}
        style={styles.filterIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    width: 56,
    height: 56,
  },
  searchInputContainer: {
    borderRadius: 20,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    gap: 8,
    flex: 1,
    color: "#FFFFFF",
  },
  searchIcon: {
    width: 25,
    height: 25,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: "rgba(107, 118, 152, 1)",
    fontFamily: "Poppins",
    padding: 4,
  },
  filterIcon: {
    width: 34,
    height: 34,
  },
});
