import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';
import { Colors } from '@/constants/Colors'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AssistLevel'>;
type RouteProps = RouteProp<RootStackParamList, 'AssistLevel'>;

export default function AssistScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedAssist, setSelectedAssist] = useState<string | null>(null);

  const { name, gender, xpLevel } = route.params;
  const assistOptions = ["Check product ingredients", "Track routine", "Recommend products", "Compare products", "Scan skin"];
  
  const handleSelect = (assistLevel: string) => {
    setSelectedAssist(selectedAssist);
    // Navigate to results screen with all parameters
    navigation.navigate('SkinConcerns', { name, gender, xpLevel, assistLevel });
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors['light'].background }]}>
      <QuestionHeader
        questionNumber="QUESTION 4"
        question="What can our team help you with?"
      />
      <View style={styles.optionsContainer}>
        {assistOptions.map((option) => (
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