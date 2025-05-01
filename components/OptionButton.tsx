import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "@/constants/Theme";
import { createAnimatedComponent } from "react-native-reanimated/lib/typescript/createAnimatedComponent";
import Animated from 'react-native-reanimated'
import * as t from 'react-native-reanimated';

interface OptionButtonProps {
  label: string;
  onPress: () => void;
  style?: object;
}

export const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  onPress,
  style,
}) => {
  return (
    <AnimatedTouchableOpacity style={[styles.button, style]} onPress={onPress} entering={t.SlideInRight} exiting={t.SlideOutLeft}>
      <Text style={styles.buttonText}>{label}</Text>
    </AnimatedTouchableOpacity>
  );
};

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 46,
    backgroundColor: colors.buttonBg,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: colors.buttonText,
    fontWeight: "700",
  },
});