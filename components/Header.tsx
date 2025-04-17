import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4a091b0d9a23402d51b275953e23c65073dadcb" }}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.searchIcon}>
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
          <Path
            d="M27.607 25.62l-5.191-5.149c2.015-2.512 2.99-5.701 2.727-8.91-.264-3.21-1.748-6.197-4.146-8.346C18.598 1.065 15.467-.083 12.248.005 9.029.093 5.966 1.41 3.688 3.688 1.411 5.966.093 9.029.005 12.248c-.088 3.22 1.06 6.35 3.21 8.749 2.149 2.398 5.135 3.882 8.345 4.146 3.21.264 6.399-.712 8.911-2.727l5.149 5.149a1.342 1.342 0 001.987 0c.252-.261.393-.61.393-.972 0-.363-.141-.712-.393-.973zM12.622 22.416a9.794 9.794 0 01-9.497-9.794 9.794 9.794 0 019.497-9.794 9.794 9.794 0 019.794 9.794 9.794 9.794 0 01-9.794 9.794z"
            fill="#EFF0FF"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 163,
    height: 91,
    marginTop: 32,
  },
  searchIcon: {
    position: "absolute",
    right: 57,
    top: 62,
  },
});