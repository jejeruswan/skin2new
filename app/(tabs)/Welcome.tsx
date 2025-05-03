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
  <View style={styles.container}>
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
    backgroundColor: Colors.light.background,
  },
  title: {
    ...typography.heading,
    marginTop:240,
    padding: 30
  },
  buttonContainer: {
    width: "100%",
    padding: 30,
    alignItems: "flex-start",
  },
  button: {
    width: 220,
    height: 67,
  },
});