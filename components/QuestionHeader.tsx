import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography } from "@/constants/Theme";
import Animated from 'react-native-reanimated'
import * as t from 'react-native-reanimated';

interface QuestionHeaderProps {
  questionNumber: string;
  question: string;
}

export const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  questionNumber,
  question,
}) => {
  return (
    <View style={styles.container}>
      <Animated.Text style={styles.questionNumber} entering={t.SlideInRight} exiting={t.SlideOutLeft}>{questionNumber}</Animated.Text>
      <Animated.Text style={styles.question} entering={t.SlideInRight} exiting={t.SlideOutLeft}>{question}</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  questionNumber: {
    ...typography.subheading,
    marginBottom: 12,
  },
  question: {
    ...typography.heading,
  },
});
