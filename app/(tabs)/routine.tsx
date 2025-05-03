// app/(tabs)/Routine.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { useRouter } from "expo-router";

import { StatusBar } from "@/components/StatusBar";
import { Header }    from "@/components/Header";
import { RoutineCard } from "@/components/RoutineCard";
import { Colors }    from "@/constants/Colors";
import { layout, spacing, typography } from "@/constants/Theme";

type Step = { label: string };

const INITIAL_STEPS: Step[] = [
  { label: "Cleanser" },
  { label: "Exfoliator" },
  { label: "Serum" },
  { label: "Moisturizer" },
  { label: "Sunscreen" },
];

export default function RoutineScreen() {
  const router = useRouter();
  const [data, setData] = useState<Step[]>(INITIAL_STEPS);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Step>) => (
    <RoutineCard
      label={item.label}
      onLongPress={drag}
      onPress={() => {
        if (item.label === "Cleanser") {
          router.push("/Cleansers");
        }
      }}
      style={{
        marginBottom: spacing.medium,
        opacity: isActive ? 0.8 : 1,
      }}
    />
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar />

      <DraggableFlatList
        data={data}
        onDragEnd={({ data: newData }) => setData(newData)}
        keyExtractor={(item) => item.label}
        renderItem={renderItem}

        ListHeaderComponent={
          <>
            <Header />
            <Text style={[typography.heading, styles.title]}>
              Your{"\n"}Routine
            </Text>
            <Text style={styles.description}>
              A skincare routine personalised just for you! Modify the routine as
              you see fit or click on a step to learn more.
            </Text>
          </>
        }

        ListFooterComponent={<View style={{ height: spacing.large }} />}
        contentContainerStyle={styles.scroll}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  scroll:    { paddingHorizontal: layout.padding, paddingBottom: 100 },
  title: {
    fontSize: 58,
    lineHeight: 60,
    fontWeight: "600",
    color: "rgba(246,246,245,1)",
    marginTop: spacing.large,
    marginBottom: spacing.small,
  },
  description: {
    fontSize: 16,
    color: "white",
    marginBottom: spacing.medium,
    lineHeight: 22,
  },
});