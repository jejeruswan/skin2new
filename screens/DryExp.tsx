import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'DryExp'>;
type RouteProps = RouteProp<RootStackParamList, 'DryExp'>;

export default function DryScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedDryExp, setSelectedDryExp] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel } = route.params;
  const dryOptions = ["Never", "Rarely", "Somewhat", "Often", "Every Day"];
  
  const handleSelect = (dryExp: string) => {
    setSelectedDryExp(dryExp);
    // Navigate to results screen with all parameters
    navigation.navigate('SkinProd', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 9"
        question="How often do you experience dry, flaky skin?"
      />
      <View style={styles.optionsContainer}>
        {dryOptions.map((option) => (
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