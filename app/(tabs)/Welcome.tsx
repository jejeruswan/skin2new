import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { OptionButton } from "@/components/OptionButton";
import { colors, typography, spacing, layout } from "@/constants/Theme";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { Colors } from '@/constants/Colors';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen () {
  const navigation = useNavigation<NavigationProp>();
  return (
  <View style={[styles.container, { backgroundColor: Colors['light'].background }]}>
  <Text style={styles.title}>
        Welcome to Skin2Care! Ready to start your clear skin arc?
      </Text>
      <View style={styles.buttonContainer}>
        <OptionButton
          label="Let's Go!"
          onPress={() => navigation.navigate('NameInput')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.padding,
    alignItems: "center",
    width: "100%",
    maxWidth: layout.maxWidth,
  },
  title: {
    ...typography.heading,
    marginBottom: spacing.xlarge,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: 241,
    height: 67,
  },
});