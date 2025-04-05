import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'KnowSkin'>;
type RouteProps = RouteProp<RootStackParamList, 'KnowSkin'>;

export default function KnowSkinScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedKnowSkin, setselectedKnowSkin] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns } = route.params;
  const knowSkinOptions = ["Yes! I know my skin type.", "No—Help me find it!"];
  
  const handleSelect = (knowSkin: string) => {
    setselectedKnowSkin(selectedKnowSkin);
    // Navigate to results screen with all parameters
    navigation.navigate('SkinType', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 6"
        question="Do you know your skin type?"
      />
      <View style={styles.optionsContainer}>
        {knowSkinOptions.map((option) => (
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