import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Allergies'>;
type RouteProps = RouteProp<RootStackParamList, 'Allergies'>;

export default function AllergiesScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedAllergies, setSelectedAllergies] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd } = route.params;
  const allergyOptions = ["Fragrances", "Alcohols", "Parabens", "Dyes", "Sulfates", "Essential oils", "None"];
  
  const handleSelect = (allergies: string) => {
    setSelectedAllergies(selectedAllergies);
    // Navigate to results screen with all parameters
    navigation.navigate('SkinGoals', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd, 
        allergies 
    });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 10"
        question="Do you have any ingredient sensitivities or allergies?"
      />
      <View style={styles.optionsContainer}>
        {allergyOptions.map((option) => (
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