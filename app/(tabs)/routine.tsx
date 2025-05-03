// app/(tabs)/routine.tsx

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { DraggableRoutineList } from "@/components/DraggableRoutineList";
import { Colors } from "@/constants/Colors";
import { typography } from "@/constants/Theme";

type RoutineItem = {
  id: string;
  label: string;
  onPress?: () => void;
};

export const RoutineScreen = () => {
  const router = useRouter();
  
  const [routineSteps, setRoutineSteps] = useState<RoutineItem[]>([
    { id: "1", label: "Cleanser", onPress: () => router.push("/Cleansers") },
    { id: "2", label: "Exfoliator" },
    { id: "3", label: "Serum" },
    { id: "4", label: "Moisturizer" },
    { id: "5", label: "Sunscreen" },
  ]);

  const handleReorder = (newItems: RoutineItem[]) => {
    setRoutineSteps(newItems);
    // No need to save since you want it to reset on navigation
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Header />
        <Text style={[typography.heading, styles.title]}>Your{"\n"}Routine</Text>
        <Text style={styles.description}>
          A skincare routine personalised just for you! Modify the routine as you
          see fit or click on a step to learn more.
        </Text>

        <DraggableRoutineList 
          items={routineSteps}
          onReorder={handleReorder}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:
    { flex: 1, backgroundColor: Colors.light.background },
  scroll:
    { paddingHorizontal: 20, paddingBottom: 100 },
  title:
    { fontSize: 58, lineHeight: 60, fontWeight: "600", color: "rgba(246, 246, 245, 1)", marginTop: 20 },
  description:
    { fontSize: 16, color: "white", marginTop: 10, marginBottom: 24, lineHeight: 22 },
});

export default RoutineScreen;