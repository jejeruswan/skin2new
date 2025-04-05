import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path, Rect } from "react-native-svg";

export const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.handle} />
      <View style={styles.navigation}>
        <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
          <Path
            d="M21.691 20.13l-4.078-4.046c1.583-1.974 2.35-4.48 2.142-7.001-.207-2.522-1.373-4.868-3.258-6.557-1.884-1.689-4.344-2.592-6.874-2.522-2.53.069-4.936 1.105-6.725 2.894-1.79 1.79-2.825 4.196-2.894 6.725-.07 2.53.833 4.99 2.522 6.874 1.689 1.884 4.035 3.05 6.557 3.258 2.522.207 5.027-.56 7.001-2.143l4.046 4.046c.102.103.224.185.358.241.134.056.277.084.423.084.145 0 .289-.028.422-.084.134-.056.256-.138.358-.241A1.342 1.342 0 0022 20.894c0-.285-.11-.559-.309-.764zm-11.774-2.517c-1.522 0-3.01-.452-4.275-1.297-1.266-.846-2.252-2.048-2.835-3.454-.582-1.406-.735-2.953-.438-4.446.297-1.493 1.03-2.864 2.106-3.94 1.076-1.076 2.447-1.809 3.94-2.106 1.493-.297 3.04-.144 4.446.438 1.406.583 2.608 1.569 3.454 2.834.845 1.266 1.297 2.753 1.297 4.275 0 2.041-.81 3.998-2.254 5.442-1.444 1.443-3.4 2.254-5.441 2.254z"
            fill="#EFF0FF"
          />
        </Svg>
        <Svg width={31} height={32} viewBox="0 0 31 32" fill="none">
          <Path
            d="M15.5 4C15.5 10.627 20.705 16 27.125 16 20.705 16 15.5 21.373 15.5 28c0-6.627-5.205-12-11.625-12C10.295 16 15.5 10.627 15.5 4z"
            stroke="#EFF0FF"
            strokeWidth={1.875}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
          <Path
            d="M9.375 22.917V12.5h6.25v10.417M3.125 9.375L12.5 2.083l9.375 7.292v11.458c0 .553-.22 1.083-.61 1.473-.39.391-.86.611-1.473.611H5.208c-.552 0-1.082-.22-1.473-.61-.39-.39-.61-.92-.61-1.474V9.375z"
            stroke="#FFF8E6"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
          <Path
            d="M6.25 26.25V6.25c0-.688.245-1.276.734-1.766.49-.49 1.078-.734 1.766-.734h12.5c.688 0 1.276.245 1.766.734.49.49.734 1.078.734 1.766v20L15 22.5l-8.75 3.75zM8.75 22.438L15 19.75l6.25 2.688V6.25H8.75v16.188z"
            fill="#EFF0FF"
          />
        </Svg>
        <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
          <Path
            d="M6.492 5.053v-.005C6.482 2.782 8.344 1 10.512 1c2.158 0 4.008 1.75 4.008 4.029 0 2.378-1.866 4.169-4.008 4.169-2.159 0-4.02-1.795-4.02-4.145zM18.241 20H2.759c-.974 0-1.423-.146-1.607-.265-.085-.054-.152-.108-.152-.384 0-1.072.768-2.584 2.446-3.876 1.641-1.263 4.05-2.221 7.054-2.221 3.01 0 5.419.958 7.058 2.221 1.676 1.291 2.442 2.804 2.442 3.876 0 .276-.067.33-.151.384-.185.119-.634.265-1.608.265z"
            stroke="#EFF0FF"
            strokeWidth={2}
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#6B7698",
    height: 98,
  },
  handle: {
    width: 35,
    height: 5,
    backgroundColor: "#FFF8E6",
    borderRadius: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 20,
  },
});
