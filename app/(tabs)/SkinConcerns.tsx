import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SkinConcerns'>;
type RouteProps = RouteProp<RootStackParamList, 'SkinConcerns'>;

export default function ConcernScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedConcern, setselectedConcern] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel } = route.params;
  const concernOptions = ["Acne", "Wrinkles", "Dark spots", "Redness", "Dryness", "Sensitivity", "Oiliness", "Large pores"];
  
  const handleSelect = (skinConcerns: string) => {
    setselectedConcern(selectedConcern);
    // Navigate to results screen with all parameters
    navigation.navigate('KnowSkin', { name, gender, xpLevel, assistLevel, skinConcerns });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 5"
        question="What are your main skincare concerns?"
      />
      <View style={styles.optionsContainer}>
        {concernOptions.map((option) => (
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