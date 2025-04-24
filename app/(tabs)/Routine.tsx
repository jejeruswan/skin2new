import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { BottomNavigation } from "@/components/BottomNavigation";
import { RoutineCard } from "@/components/RoutineCard";
import { Colors } from "@/constants/Colors";
import { useRouter } from 'expo-router';

export const RoutineScreen = () => {
  const routineSteps = [{label: "Cleanser", route: "/Cleansers"}, {label: "Exfoliator", route: "/exfoliator"}, {label: "Serum", route: "/serum"}, {label: "Moisturizer", route: "/moinsturizer"}, {label: "Sunscreen", route: "sunscreen"}];

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />
        <Text style={styles.title}>Your{"\n"}Routine</Text>
        <Text style={styles.description}>
          A skincare routine personalised just for you! Modify the routine as you see fit or click on a step to learn more.
        </Text>

        <View style={styles.cardsContainer}>
          {routineSteps.map((step) => (
            <RoutineCard key={step.label} label={step.label} />
          ))}
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
    marginBottom: 24,
    lineHeight: 22,
  },
  cardsContainer: {
    gap: 14,
  },
});

export default RoutineScreen;