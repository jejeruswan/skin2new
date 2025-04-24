import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';
import { Colors } from '@/constants/Colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ActIngrPref'>;
type RouteProps = RouteProp<RootStackParamList, 'ActIngrPref'>;

export default function ActIngrPrefScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedActIngrPref, setSelectedActIngrPref] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies, skinGoals, skinPref, pricePref, ingrPref } = route.params;
  const actIngrPrefOptions = ["I prefer active ingredients", "I prefer gentle, non-active formulas", "No preference"];
  
  const handleSelect = (actIngrPref: string) => {
    setSelectedActIngrPref(selectedActIngrPref);
    // Navigate to results screen with all parameters
    navigation.navigate('Result', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies, skinGoals, skinPref, pricePref, ingrPref, actIngrPref });
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors['light'].background }]}>
      <QuestionHeader
        questionNumber="QUESTION 16"
        question="Do you prefer products with or without active ingredients (ie. retinol, AHAs, BHAs, niacinamide)?"
      />
      <View style={styles.optionsContainer}>
        {actIngrPrefOptions.map((option) => (
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