import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";

type AccountCardProps = {
  label: string;
  content?: string;
  isExpanded?: boolean;
  onPress?: () => void;
};

export const AccountCard: React.FC<AccountCardProps> = ({
  label,
  content,
  isExpanded = false,
  onPress,
}) => {
  const animatedHeight = React.useRef(new Animated.Value(0)).current;
  const animatedRotation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(animatedHeight, {
        toValue: isExpanded ? 1 : 0,
        useNativeDriver: false,
      }),
      Animated.spring(animatedRotation, {
        toValue: isExpanded ? 1 : 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isExpanded]);

  const rotation = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  const heightStyle = {
    maxHeight: animatedHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100], // Adjust based on content
    }),
    opacity: animatedHeight,
  };

  return (
    <TouchableOpacity
      style={[styles.card, isExpanded && styles.expandedCard]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.mainContent}>
        <Text style={styles.label}>{label}</Text>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          <Feather name="chevron-right" size={22} color="#6B7698" />
        </Animated.View>
      </View>
      
      <Animated.View style={[styles.expandedContent, heightStyle]}>
        <Text style={styles.contentText}>{content}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#E6E7FA",
    borderRadius: 22,
    paddingVertical: 16,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  expandedCard: {
    paddingBottom: 20,
  },
  mainContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6B7698",
  },
  expandedContent: {
    overflow: 'hidden',
    marginTop: 12,
  },
  contentText: {
    fontSize: 16,
    color: "#6B7698",
    lineHeight: 22,
  },
});