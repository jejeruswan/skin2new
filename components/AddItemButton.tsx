import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const AddItemButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <View style={styles.scrollBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 45,
    flexDirection: "column",
    gap: 32,
  },
  button: {
    width: 53,
    height: 53,
    borderRadius: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Rounded Mplus 1c",
    fontSize: 53,
    color: "#EFF0FF",
    fontWeight: "500",
  },
  scrollBar: {
    borderRadius: 100,
    width: 4,
    flexShrink: 0,
    height: 216,
    position: "relative",
  },
});
