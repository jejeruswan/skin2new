import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';
import { Colors } from '@/constants/Colors'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PricePref'>;
type RouteProps = RouteProp<RootStackParamList, 'PricePref'>;

export default function PricePrefScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedPricePref, setSelectedPricePref] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies, skinGoals, skinPref } = route.params;
  const pricePrefOptions = ["Budget-friendly", "Mid-range", "High-end; I'm fancy like that!"];
  
  const handleSelect = (pricePref: string) => {
    setSelectedPricePref(selectedPricePref);
    // Navigate to results screen with all parameters
    navigation.navigate('IngrPref', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, allergies, skinGoals, skinPref, pricePref });
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors['light'].background }]}>
      <QuestionHeader
        questionNumber="QUESTION 14"
        question="What is your preferred price range for skincare products?"
      />
      <View style={styles.optionsContainer}>
        {pricePrefOptions.map((option) => (
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