import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export const RoutineCard = ({ label }: { label: string }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.left}>
        <Entypo name="dots-three-vertical" size={18} color="#6B7698" />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Feather name="chevron-right" size={22} color="#6B7698" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E6E7FA",
    borderRadius: 22,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6B7698",
  },
});