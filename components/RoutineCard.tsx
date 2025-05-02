// components/RoutineCard.tsx

import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

export type RoutineCardProps = {
  label: string;
  /** called on tap */
  onPress?: () => void;
  /** called on long-press (for drag/drop later) */
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
} & Pick<TouchableOpacityProps, "activeOpacity">;  // optionally accept activeOpacity

export const RoutineCard: React.FC<RoutineCardProps> = ({
  label,
  onPress,
  onLongPress,
  style,
  activeOpacity = 0.7,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
    >
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