import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { RoutineCard } from "@/components/RoutineCard";
import { Colors } from "@/constants/Colors";

const routineSteps = [
  { label: "Cleanser" },
  { label: "Exfoliator" },
  { label: "Serum" },
  { label: "Moisturizer" },
  { label: "Sunscreen" },
];

export const RoutineScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />
        <Text style={styles.title}>Your{"\n"}Routine</Text>
        <Text style={styles.description}>
          A skincare routine personalised just for you! Modify the routine as you
          see fit or click on a step to learn more.
        </Text>

        <View style={styles.cardsContainer}>
          {routineSteps.map((step) => {
            if (step.label === "Cleanser") {
              return (
                <RoutineCard
                  key={step.label}
                  label="Cleanser"
                  onPress={() => router.push("/Cleansers")}
                />
              );
            }
            return <RoutineCard key={step.label} label={step.label} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:     { flex: 1, backgroundColor: Colors.light.background },
  scroll:        { paddingHorizontal: 20, paddingBottom: 100 },
  title:         { fontSize: 42, fontWeight: "bold", color: "white", marginTop: 20 },
  description:   { fontSize: 16, color: "white", marginTop: 10, marginBottom: 24, lineHeight: 22 },
  cardsContainer:{ gap: 14 },
});

export default RoutineScreen;