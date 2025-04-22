import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Gender'>;
type RouteProps = RouteProp<RootStackParamList, 'Gender'>;

export default function GenderScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const { name } = route.params;
  const genderOptions = ["Male", "Female", "Nonbinary", "Other"];
  
  const handleSelect = (gender: string) => {
    setSelectedGender(selectedGender);
    // Navigate to results screen with all parameters
    navigation.navigate('XpLevel', { name, gender });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 2"
        question="What gender do you identify as?"
      />
      <View style={styles.optionsContainer}>
        {genderOptions.map((option) => (
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