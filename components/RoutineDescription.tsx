import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const RoutineDescription: React.FC = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Your</Text>
        <Text style={styles.titleText}>Routine</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          A skincare routine personalised just for you! Modify the routine as
          you see fit or click on a step to learn more.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    color: "#F6F6F5",
    fontSize: 64,
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: 67,
    letterSpacing: -3,
    alignSelf: "center",
    width: 298,
  },
  titleText: {
    color: "#F6F6F5",
    fontSize: 64,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  descriptionContainer: {
    marginTop: 37,
    marginLeft: 32,
  },
  descriptionText: {
    color: "#F6F6F5",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: 19,
    letterSpacing: -1,
  },
});
