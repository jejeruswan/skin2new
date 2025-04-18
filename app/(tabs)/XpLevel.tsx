import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'XpLevel'>;
type RouteProps = RouteProp<RootStackParamList, 'XpLevel'>;

export default function XpLevelScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedXP, setSelectedXP] = useState<string | null>(null);

  const { name, gender } = route.params;
  const xpOptions = ["A little bit...", "Just enough!", "I keep up with the trends."];
  
  const handleSelect = (xpLevel: string) => {
    setSelectedXP(selectedXP);
    // Navigate to results screen with all parameters
    navigation.navigate('AssistLevel', { name, gender, xpLevel });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 3"
        question="What do you know about skincare?"
      />
      <View style={styles.optionsContainer}>
        {xpOptions.map((option) => (
          <OptionButton
            key={option}
            label={option}
            onPress={() => handleSelect(option)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.padding,
    width: "100%",
    maxWidth: layout.maxWidth,
  },
  optionsContainer: {
    gap: 9,
  },
});