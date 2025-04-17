import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SkinFeel'>;
type RouteProps = RouteProp<RootStackParamList, 'SkinFeel'>;

export default function SkinFeelScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedSkinFeel, setSelectedSkinFeel] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType } = route.params;
  const skinFeelOptions = ["Dry/Tight", "Oily", "Dry/Oily in some parts", "Sensitive/Irritable", "Clear/Smooth"];
  
  const handleSelect = (skinFeel: string) => {
    setSelectedSkinFeel(skinFeel);
    // Navigate to results screen with all parameters
    navigation.navigate('DryExp', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 8"
        question="How does your skin feel 30 minutes after you shower? (No products)"
      />
      <View style={styles.optionsContainer}>
        {skinFeelOptions.map((option) => (
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