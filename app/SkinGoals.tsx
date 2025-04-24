import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';
import { Colors } from '@/constants/Colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SkinGoals'>;
type RouteProps = RouteProp<RootStackParamList, 'SkinGoals'>;

export default function SkinGoalsScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedSkinGoals, setSelectedSkinGoals] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies } = route.params;
  const goalOptions = ["Clear skin", "Anti-ageing", "Hydration", "Brightening", "Soothing", "Oil control", "Skin barrier repair", "Hyperpigmentation reduction", "Sun protection", "Minimise pores"];
  
  const handleSelect = (skinGoals: string) => {
    setSelectedSkinGoals(selectedSkinGoals);
    // Navigate to results screen with all parameters
    navigation.navigate('SkinPref', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies, skinGoals });
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors['light'].background }]}>
      <QuestionHeader
        questionNumber="QUESTION 12"
        question="What are your main goals with your skincare routine?"
      />
      <View style={styles.optionsContainer}>
        {goalOptions.map((option) => (
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
    flex: 1,
    paddingHorizontal: layout.padding,
    width: "100%",
    maxWidth: layout.maxWidth,
  },
  optionsContainer: {
    gap: 9,
  },
});