import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SkinType'>;
type SkinTypeScreenRouteParams = {
  name: string;
  gender: string;
  xpLevel: string;
  assistLevel: string;
  skinConcerns: string;
  knowSkin: string;
};

type RouteProps = RouteProp<{ params: SkinTypeScreenRouteParams }, 'params'>;

export default function SkinTypeScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedSkinType, setSelectedSkinType] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin } = route.params;
  const skinTypeOptions = ["Dry/Tight", "Oily", "Dry/Oily in some parts", "Sensitive/Irritable", "Clear/Smooth"];
  
  const handleSelect = (skinType: string) => {
    setSelectedSkinType(selectedSkinType);
    // Navigate to results screen with all parameters
    navigation.navigate('SkinFeel', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 7"
        question="What is your skin type?"
      />
      <View style={styles.optionsContainer}>
        {skinTypeOptions.map((option) => (
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