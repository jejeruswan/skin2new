import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';
import { Colors } from '@/constants/Colors'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IngrPref'>;
type RouteProps = RouteProp<RootStackParamList, 'IngrPref'>;

export default function IngrPrefScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedIngrPref, setSelectedIngrPref] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies, skinGoals, skinPref, pricePref } = route.params;
  const ingrPrefOptions = ["Hydration", "Brightening/oil control", "Anti-ageing", "Antioxidant", "Skin barrier repair", "None"];
  
  const handleSelect = (ingrPref: string) => {
    setSelectedIngrPref(selectedIngrPref);
    // Navigate to results screen with all parameters
    navigation.navigate('ActIngrPref', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies, skinGoals, skinPref, pricePref, ingrPref });
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors['light'].background }]}>
      <QuestionHeader
        questionNumber="QUESTION 15"
        question="Do you have any specific skincare ingredients you love and look for in products?"
      />
      <View style={styles.optionsContainer}>
        {ingrPrefOptions.map((option) => (
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
    backgroundColor: Colors['light'].background,
    justifyContent: "center",
    paddingHorizontal: layout.padding,
    width: "100%",
    maxWidth: layout.maxWidth,
  },
  optionsContainer: {
    gap: 9,
  },
});