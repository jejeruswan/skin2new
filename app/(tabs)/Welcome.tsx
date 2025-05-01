import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import { OptionButton } from "@/components/OptionButton";
import { StatusBar } from "@/components/StatusBar";
import { typography, spacing, layout } from "@/constants/Theme";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/types';
import { Colors } from '@/constants/Colors';
import Animated from 'react-native-reanimated'
import * as t from 'react-native-reanimated';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen () {
  const navigation = useNavigation<NavigationProp>();
  return (
  <View style={[styles.container, { backgroundColor: Colors['light'].background }]}>
    <StatusBar/>
    <Animated.Text style={styles.title} entering={t.SlideInRight} exiting={t.SlideOutLeft}>
        Welcome to Skin2Care! Ready to start your clear skin arc?
      </Animated.Text>
      <Animated.View style={styles.buttonContainer} entering={t.SlideInRight} exiting={t.SlideOutLeft}>
        <OptionButton
          label="Let's Go!"
          onPress={() => navigation.navigate('NameInput')}
          style={styles.button}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.light.background,
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