import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SkinProd'>;
type RouteProps = RouteProp<RootStackParamList, 'SkinProd'>;

export default function SkinProdScreen () {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const [selectedSkinProd, setSelectedSkinProd] = useState<string | null>(null);

  const { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp } = route.params;
  const skinProdOptions = ["Cleansers", "Moisturisers", "Serums", "Sunscreen", "Exfoliators", "Ampoules", "Eye creams", "Toners", "Spot treatment", "Face masks"];
  
  const handleSelect = (skinProd: string) => {
    setSelectedSkinProd(skinProd);
    // Navigate to results screen with all parameters
    navigation.navigate('Allergies', { name, gender, xpLevel, assistLevel, skinConcerns, knowSkin, skinType, skinFeel, dryExp, skinProd });
  };

  return (
    <View style={styles.container}>
      <QuestionHeader
        questionNumber="QUESTION 9"
        question="What skincare products do you currently use?"
      />
      <View style={styles.optionsContainer}>
        {skinProdOptions.map((option) => (
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