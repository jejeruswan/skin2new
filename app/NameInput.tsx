import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { QuestionHeader } from "@/components/QuestionHeader";
import { OptionButton } from "@/components/OptionButton";
import { colors, spacing, layout } from "@/constants/Theme";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';
import { Colors } from '@/constants/Colors';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function NameInputScreen () {
  const navigation = useNavigation<NavigationProp>();
  const [name, setName] = useState("");
  const handleNext = () => {
    // Only navigate if name is not empty
    if (name.trim()) {
      navigation.navigate('Gender', { name });
    }
  };

  return (
<View style={[styles.container, { backgroundColor: Colors['light'].background }]}>      <QuestionHeader
        questionNumber="QUESTION 1"
        question="What is your name?"
      />
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        placeholderTextColor={colors.text}
        selectionColor={colors.text}
      />
      <View style={styles.line} />
      <View style={styles.buttonContainer}>
        <OptionButton
          label="→"
          onPress={handleNext}
          style={styles.button}
        />
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
  input: {
    color: colors.text,
    fontSize: 24,
    marginBottom: spacing.medium,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: colors.text,
    marginTop: 200,
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: spacing.medium,
  },
  button: {
    width: 46,
    height: 42,
    borderRadius: 12,
  },
});